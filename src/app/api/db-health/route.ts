import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export const runtime = "nodejs"; // pg needs Node runtime (not Edge)

export async function GET() {
  const r = await pool.query("SELECT now() AS now");
  return NextResponse.json({ ok: true, dbTime: r.rows[0].now });
}
