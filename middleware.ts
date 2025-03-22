export { auth as middleware } from "@/auth";

// Or like this if you need to do something

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
