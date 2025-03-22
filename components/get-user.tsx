"use client";

import { IUser } from "@/types/user";
import useSWR from "swr";

type Props = {
  id: string;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function GetUser({ id }: Props) {
  const { data, error, isLoading } = useSWR<{ user: IUser }>(
    `/api/users/${id}`,
    fetcher,
    {
      revalidateOnFocus: false,
      dedupingInterval: 60000,
    }
  );

  if (isLoading) return <p>Ładowanie użytkownika...</p>;
  if (error || !data?.user) return <p>Nie znaleziono użytkownika.</p>;

  const user = data.user;

  return (
    <div className="p-4">
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
