import { neon } from "@neondatabase/serverless";

export const adminDb = neon(process.env.ADMIN_DATABASE_URL!);
