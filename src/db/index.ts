import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "@/db/schema/index";

export const db = drizzle({
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_URL?.includes("neon") ? { rejectUnauthorized: false } : false,
  },
  schema,
});
