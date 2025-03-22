"use client";

import { IUser } from "@/types/user";

export default function UserProfile({ user }: { user: IUser }) {
  if (!user) return <p>Nie znaleziono użytkownika.</p>;

  return (
    <div>
      <h1 className="text-3xl">user-profile</h1>
      <div className="flex gap-2">
        {user ? <p>Cześć, {user.name}</p> : <p>Ładowanie danych profilu...</p>}
      </div>
    </div>
  );
}
