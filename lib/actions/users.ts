"use server";

import { auth } from "@/auth";
import { serverDb } from "../db/server";
import { IUser, NullableUser } from "@/types/user";

// Pobieranie swojego uzytkownika (siebie) do profilu z bazy danych
export async function getUserByProfile(): Promise<IUser> {
  const session = await auth();

  if (!session?.user?.email) {
    throw new Error("Brak autoryzacji");
  }

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

type UpdateUserEditProfileProps = {
  name?: string;
  image?: string;
  country?: string;
  age?: number;
  nativeLanguage?: string;
  otherLanguages?: string;
  bio?: string;
};

// Edytowanie profilu (name, image, country, age, native_language, other_languages, bio)
export async function updateUserEditProfile(data: UpdateUserEditProfileProps) {
  const session = await auth();

  if (!session?.user?.email) {
    throw new Error("Brak autoryzacji");
  }

  const { name, image, country, age, nativeLanguage, otherLanguages, bio } =
    data;

  try {
    await serverDb`UPDATE users SET
        name = COALESCE(${name}, name),
        image = COALESCE(${image}, image),
        country = COALESCE(${country}, country),
        age = COALESCE(${age}, age),
        native_language = COALESCE(${nativeLanguage}, native_language),
        other_languages = COALESCE(${otherLanguages}, other_languages),
        bio = COALESCE(${bio}, bio)
      WHERE email = ${session.user.email}`;

    return { success: true };
  } catch (error) {
    console.error("Błąd podczas aktualizacji profilu:", error);
    return { success: false, error: "Nie udało się zaktualizować profilu" };
  }
}
