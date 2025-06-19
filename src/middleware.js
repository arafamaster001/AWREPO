import { NextResponse } from "next/server";

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  const validPaths = [
    "/", // homepage
    "/mernstack",
    "/shopify",
    "/wordpress",
    "/telemetry",
    "/privacypolicy",
    "/termsandconditions",
    "/about",
    "booking",
  ];

  // Allow static assets and internal Next.js paths
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/models") || // ✅ allow model files
    pathname.match(/\.(gltf|glb|ico|png|jpg|svg|webp|css|js|woff|woff2)$/)
  ) {
    return NextResponse.next();
  }

  // Redirect anything not in sitemap to homepage
  if (!validPaths.includes(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
