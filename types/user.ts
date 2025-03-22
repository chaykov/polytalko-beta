export type IUser = {
  id: string;
  name: string;
  email: string;
  image?: string;
  age?: number;
  country?: string;
  nativeLanguage?: string;
  otherLanguages?: string;
  bio?: string;
};

export type DBUser = {
  id: string;
  name: string;
  email: string;
  image?: string;
  age?: number;
  country?: string;
  nativeLanguage?: string;
  otherLanguages?: string;
  bio?: string;
};

export type NullableUser = IUser | null;
