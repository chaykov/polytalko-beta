"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

export default function Home() {
  const {data: session, status} = useSession();

  return <div>
    <h1>Home Page</h1>
    <span>{session?.user?.name}</span>
    <div>
      {status === "authenticated" && (
         <button className="bg-blue-200 p-2 block" onClick={() => signOut()}>Sign out</button>
      )}

      {status === "unauthenticated" && (
         <button className="bg-blue-200 p-2 block" onClick={() => signIn("github")}>Sign In</button>
      )}
    </div>
  </div>;
}
