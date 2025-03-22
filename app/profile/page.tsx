import UserProfile from "@/components/user-profile";
import { getUserByProfile } from "@/lib/actions/users";
import { IUser } from "@/types/user";

export default async function ProfileRoute() {
  const user: IUser = await getUserByProfile();

  return <UserProfile user={user} />;
}
