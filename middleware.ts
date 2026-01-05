import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
]);

const isPublicAsset = createRouteMatcher([
  "/pharmed-logo.png",
  "/favicon.ico",
  "/_next/(.*)",
]);

export default clerkMiddleware((auth, req) => {
  if (isPublicAsset(req)) return;
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|png|jpe?g|webp|gif|svg|ico|woff2?|ttf)).*)",
    "/(api|trpc)(.*)",
  ],
};
