import GetUser from "@/components/get-user";

export default async function UsersRouteId({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <GetUser id={id} />;
}
