"use client";

import { NullableUser } from "@/types/user";

export default function GetUser({ user }: { user: NullableUser }) {
  if (!user) return <p>Nie znaleziono użytkownika.</p>;

  return (
    <div className="p-4">
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
