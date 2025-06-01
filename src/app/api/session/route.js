import dbConnection from "@/config/connectDB";
import { NextResponse } from "next/server";
import sessionModel from "@/models/sessionModel";

export async function POST(req) {
  await dbConnection();

  try {
    const data = await req.json();
    const { uuid, entranceTime, exitTime, event } = data;

    if (!uuid) {
      return NextResponse.json(
        { message: "UUID is required" },
        { status: 400 }
      );
    }

    if (!event || (event !== "entrance" && event !== "exit")) {
      return NextResponse.json(
        { message: "Invalid or missing event type" },
        { status: 400 }
      );
    }

    const existing = await sessionModel.findOne({ uuid });

    // ----------------------------
    // ENTRANCE HANDLING
    // ----------------------------
    if (event === "entrance") {
      const newSession = {
        entranceTime: new Date(entranceTime),
        exitTime: null,
        durationInSeconds: null,
      };

      if (existing) {
        // Defensive check
        if (!Array.isArray(existing.sessions)) {
          existing.sessions = [];
        }

        existing.status = "returning";
        existing.lastVisit = new Date();
        existing.visitCount += 1;
        existing.sessions.push(newSession);
        await existing.save();
      } else {
        await sessionModel.create({
          uuid,
          status: "new",
          lastVisit: new Date(),
          visitCount: 1,
          sessions: [newSession],
        });
      }
    }

    // ----------------------------
    // EXIT HANDLING
    // ----------------------------
    else if (event === "exit") {
      const exitDate = new Date(exitTime);

      if (existing) {
        if (!Array.isArray(existing.sessions)) {
          existing.sessions = [];
        }

        const lastSession = existing.sessions[existing.sessions.length - 1];

        if (lastSession && lastSession.exitTime === null && lastSession.entranceTime) {
          const enterDate = new Date(lastSession.entranceTime);
          const duration = Math.floor((exitDate - enterDate) / 1000);

          lastSession.exitTime = exitDate;
          lastSession.durationInSeconds = duration;
        } else {
          existing.sessions.push({
            entranceTime: null,
            exitTime: exitDate,
            durationInSeconds: null,
          });
          existing.visitCount += 1;
        }

        existing.lastVisit = exitDate;
        await existing.save();
      } else {
        await sessionModel.create({
          uuid,
          status: "new",
          lastVisit: exitDate,
          visitCount: 1,
          sessions: [
            {
              entranceTime: null,
              exitTime: exitDate,
              durationInSeconds: null,
            },
          ],
        });
      }
    }

    return NextResponse.json(
      { message: "Session updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Session API error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
