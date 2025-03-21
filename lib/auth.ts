import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

import NeonAdapter from "@auth/neon-adapter";
import { Pool } from "@neondatabase/serverless";

export const { handlers, auth, signIn, signOut } = NextAuth(() => {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });

  return {
    adapter: NeonAdapter(pool),
    providers: [
      GitHub({
        clientId: process.env.AUTH_GITHUB_ID ?? "",
        clientSecret: process.env.AUTH_GITHUB_SECRET ?? "",
      }),
    ],

    callbacks: {
      authorized: async ({ auth }) => {
        return !!auth;
      },
    },

    basePath: "/api/auth",
    secret: process.env.AUTH_SECRET,
  };
});
