import { NextRequest, NextResponse } from "next/server";
import { serverDb } from "@/lib/db/server";
import { IUser } from "@/types/user";

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const { id } = context.params;

  try {
    const data =
      await serverDb`SELECT id, name, email, image FROM users WHERE id =${id}`;

    const user = data[0] as IUser;

    if (!user) {
      return NextResponse.json(
        { error: "Użytkownik nie został znaleziony." },
        { status: 404 }
      );
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error("Błąd w API GET /api/users/[id]:", error);

    return NextResponse.json(
      { error: "Coś poszło nie tak po stronie serwera." },
      { status: 500 }
    );
  }
}
