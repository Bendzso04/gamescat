// src/app/protected/page.js
"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Admin() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session) {
    return (
      <div className="min-h-screen flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center p-8">
          Please sign in to access page.
        </h1>
        <button
          onClick={() => signIn()}
          className="px-4 py-2 rounded text-white bg-blue-500 hover:bg-blue-700"
        >
          Sign in
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center p-8">
        Welcome, {session.user.name}!
      </h1>
      <button
        onClick={() => signOut()}
        className="px-4 py-2 rounded text-white bg-red-500 hover:bg-red-700"
      >
        Sign out
      </button>
    </div>
  );
}
