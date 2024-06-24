import { NextResponse } from "next/server";

export function middleware(request) {
  const cookie = request.cookies.get("isAuthenticated");
  console.log(cookie);
  if (cookie === undefined) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next("");
}

export const config = {
  matcher: "/admin",
};
