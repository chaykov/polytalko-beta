export type IUser = {
  id: string;
  name: string;
  email: string;
  image?: string;
};

export type DBUser = {
  id: string;
  name: string;
  email: string;
  image?: string;
};

export type NullableUser = IUser | null;
