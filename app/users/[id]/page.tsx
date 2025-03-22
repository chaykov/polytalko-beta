import GetUser from "@/components/get-user";
import { getUserById } from "@/lib/actions/users";
import React from "react";

export default async function UsersRouteId({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await getUserById(id);

  return <GetUser user={user} />;
}
