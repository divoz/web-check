import "server-only";

import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE_URL is not set");

export const pool = new Pool({
  connectionString,
  // Neon uses TLS; this keeps it simple for local dev
  ssl: { rejectUnauthorized: false },
});
