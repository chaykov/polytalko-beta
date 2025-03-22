"use client";

import { IUser } from "@/types/user";
import Link from "next/link";

export default function GetUsers({ users }: { users: IUser[] }) {
  return (
    <div className="space-y-2">
      {users.map((user) => (
        <Link key={user.id} href={`/users/${user.id}`} className="block">
          <div className="p-4 border rounded-xl shadow-sm">
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
