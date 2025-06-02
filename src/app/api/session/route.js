import dbConnection from "@/config/connectDB";
import { NextResponse } from "next/server";
import sessionModel from "@/models/sessionModel";

export async function POST(req) {
  await dbConnection();

  try {
    // Parse JSON data from request body with Error Solved error json format
    // const data = await req.json();
    const text = await req.text();
    const data = JSON.parse(text);

    const { uuid, entranceTime, exitTime, event, location } = data;

    console.log("New session: ", { uuid, entranceTime, event, location });

    // Validate required fields
    if (!uuid) {
      throw new Error("UUID is required");
    }

    if (!event || (event !== "entrance" && event !== "exit")) {
      throw new Error("Invalid or missing event type");
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
        location,
      };

      if (existing) {
        // Ensure sessions array exists
        if (!Array.isArray(existing.sessions)) {
          existing.sessions = [];
        }

        // Check for open session (no exitTime)
        const openSession = existing.sessions.find(
          (session) => session.entranceTime && !session.exitTime
        );

        if (openSession) {
          throw new Error("An open session already exists for this UUID");
        }

        // Update returning user
        existing.status = "returning";
        existing.lastVisit = new Date(entranceTime);
        existing.visitCount += 1;
        existing.sessions.push(newSession);
        await existing.save();
      } else {
        // Create new user
        const dataSaved = await sessionModel.create({
          uuid,
          status: "new",
          lastVisit: new Date(entranceTime),
          visitCount: 1,
          sessions: [newSession],
          location,
          errorLogs: [],
        });

        console.log("New user created: ", dataSaved);
      }
    }

    // ----------------------------
    // EXIT HANDLING
    // ----------------------------
    else if (event === "exit") {
      if (!exitTime) {
        throw new Error("exitTime is required for exit event");
      }

      const exitDate = new Date(exitTime);

      if (existing) {
        // Ensure sessions array exists
        if (!Array.isArray(existing.sessions)) {
          existing.sessions = [];
        }

        const lastSession = existing.sessions[existing.sessions.length - 1];

        if (lastSession && lastSession.entranceTime && !lastSession.exitTime) {
          // Update last session with exit time and duration
          const enterDate = new Date(lastSession.entranceTime);
          const duration = Math.floor((exitDate - enterDate) / 1000);

          if (duration < 0) {
            throw new Error("Exit time cannot be before entrance time");
          }

          lastSession.exitTime = exitDate;
          lastSession.durationInSeconds = duration;
        } else {
          // No valid entrance for this exit, create an exit-only session
          existing.sessions.push({
            entranceTime: null,
            exitTime: exitDate,
            durationInSeconds: null,
            location,
          });
          existing.visitCount += 1;
        }

        existing.lastVisit = exitDate;
        await existing.save();
      } else {
        // Create new user with exit-only session
        const datasaved = await sessionModel.create({
          uuid,
          status: "new",
          lastVisit: exitDate,
          visitCount: 1,
          sessions: [
            {
              entranceTime: null,
              exitTime: exitDate,
              durationInSeconds: null,
              location,
            },
          ],
          errorLogs: [],
        });

        console.log("Session created successfully: ", datasaved);
      }
    }

    return NextResponse.json(
      { message: "Session updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Session API error:", error);

    // Save error to MongoDB
    try {
      const errorLog = {
        errorMessage: error.message,
        errorStack: error.stack,
        timestamp: new Date(),
        requestData: await req.json().catch(() => ({})), // Safely attempt to get request data
      };

      const existing = await sessionModel.findOne({
        uuid: (await req.json().catch(() => ({ uuid: null }))).uuid,
      });

      if (existing) {
        if (!Array.isArray(existing.errorLogs)) {
          existing.errorLogs = [];
        }
        existing.errorLogs.push(errorLog);
        await existing.save();
      } else {
        await sessionModel.create({
          uuid:
            (
              await req.json().catch(() => ({ uuid: `error-${Date.now()}` }))
            ).uuid || `error-${Date.now()}`,
          status: "new",
          lastVisit: new Date(),
          visitCount: 0,
          sessions: [],
          errorLogs: [errorLog],
        });
      }
    } catch (logError) {
      console.error("Failed to save error log:", logError);
    }

    return NextResponse.json(
      { message: error.message || "Internal server error" },
      { status: error.message ? 400 : 500 }
    );
  }
}
