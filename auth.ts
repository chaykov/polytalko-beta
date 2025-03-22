import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

import NeonAdapter from "@auth/neon-adapter";
import { Pool } from "@neondatabase/serverless";

export const { handlers, auth, signIn, signOut } = NextAuth(() => {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });

  return {
    adapter: NeonAdapter(pool),
    debug: true,
    providers: [
      GitHub({
        clientId: process.env.AUTH_GITHUB_ID ?? "",
        clientSecret: process.env.AUTH_GITHUB_SECRET ?? "",
      }),
    ],

    callbacks: {
      jwt({ token, trigger, session }) {
        if (trigger === "update") token.name = session.user.name;
        return token;
      },
    },

    // callbacks: {
    //   authorized: async ({ auth }) => {
    //     // Logged in users are authenticated, otherwise redirect to login page
    //     return !!auth;
    //   },
    // },

    basePath: "/api/auth",
    secret: process.env.AUTH_SECRET,
    session: { strategy: "jwt" },
  };
});
