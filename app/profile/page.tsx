import Link from "next/link";
import UserProfile from "@/components/user-profile";
import { getUserByProfile } from "@/lib/actions/users";
import { IUser } from "@/types/user";

export default async function ProfileRoute() {
  const user: IUser = await getUserByProfile();

  return (
    <div>
      <Link
        className="px-4 py-2 bg-red-200 inline-block hover:bg-red-100"
        href="/profile/edit"
      >
        Edytuj profil
      </Link>
      <UserProfile user={user} />
    </div>
  );
}
