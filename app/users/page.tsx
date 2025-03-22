import GetUsers from "@/components/get-users";
import { getAllUser } from "@/lib/actions/users";
import { IUser } from "@/types/user";
import React from "react";

export default async function UsersRoute() {
  const users: IUser[] = await getAllUser();

  return (
    <div>
      <GetUsers users={users} />
    </div>
  );
}
