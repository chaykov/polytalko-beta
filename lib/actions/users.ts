import { auth } from "@/auth";
import { serverDb } from "../db/server";
import { IUser, NullableUser } from "@/types/user";

// Pobieranie swojego uzytkownika (siebie) do profilu z bazy danych
export async function getUserByProfile(): Promise<IUser> {
  const session = await auth();

  const data =
    await serverDb`SELECT * FROM users WHERE email = ${session?.user?.email}`;

  return data[0] as IUser;
}

// Pobieranie pojedynczego uzytkownika danego ID (params) z bazy danych
export async function getUserById(id: string): Promise<NullableUser> {
  const result =
    await serverDb`SELECT id, name, email, image FROM users WHERE id = ${id}`;
  return (result[0] as NullableUser) ?? null;
}

// Pobieranie wszystkich użytkowników z bazy danych
export async function getAllUser(): Promise<IUser[]> {
  const data = await serverDb`SELECT id, name, email, image FROM users`;
  return data as IUser[];
}
