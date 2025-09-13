import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const body = await req.json().catch(() => ({}));
  return NextResponse.json({
    received: body.input === "" ? "Empty input — nothing to scan" : body,
    at: new Date().toISOString(),
  });
};

export const GET = async () => {
  return NextResponse.json({ ok: true, route: "/api/scan" });
};
