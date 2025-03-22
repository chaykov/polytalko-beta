import { neon } from "@neondatabase/serverless";

export const serverDb = neon(process.env.DATABASE_URL!);
