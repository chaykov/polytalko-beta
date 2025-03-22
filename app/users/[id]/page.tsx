import GetUser from "@/components/get-user";
import { getUserById } from "@/lib/actions/users";
import { NullableUser } from "@/types/user";

export default async function UsersRouteId({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user: NullableUser = await getUserById(id);

  if (!user) {
    return (
      <div className="text-red-500 p-4">Użytkownik nie został znaleziony.</div>
    );
  }

  return <GetUser id={id} initialData={user} />;
}
