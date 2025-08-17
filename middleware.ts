import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/vault(.*)", // protect all vault routes
]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect({
      unauthenticatedUrl: `${req.nextUrl.origin}/sign-in`, // ✅ absolute URL
    });
  }
});

export const config = {
  matcher: [
    "/((?!_next|.*\\..*).*)", // match all except static files
  ],
};
