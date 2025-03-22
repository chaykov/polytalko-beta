import { neon } from "@neondatabase/serverless";
import { IUser, NullableUser } from "@/types/user";
import { auth } from "@/auth";

const sql = neon(process.env.DATABASE_URL!);

// Pobieranie swojego uzytkownika (siebie) do profilu z bazy danych
export async function getUserByProfile(): Promise<IUser> {
  const session = await auth();

  const data =
    await sql`SELECT * FROM users WHERE email = ${session?.user?.email}`;

  return data[0] as IUser;
}

// Pobieranie pojedynczego uzytkownika danego ID (params) z bazy danych
export async function getUserById(id: string): Promise<NullableUser> {
  const result =
    await sql`SELECT id, name, email, image FROM users WHERE id = ${id}`;
  return (result[0] as NullableUser) ?? null;
}

// Pobieranie wszystkich użytkowników z bazy danych
export async function getAllUser(): Promise<IUser[]> {
  const data = await sql`SELECT id, name, email, image FROM users`;
  return data as IUser[];
}
