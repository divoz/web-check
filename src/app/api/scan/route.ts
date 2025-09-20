import { classifyInput } from "@/lib/utils";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const body = await req.json().catch(() => ({}));
  const { kind, value, reason } = classifyInput(body.input ?? "");

  return NextResponse.json({
    input: { kind, value, reason },
    at: new Date().toISOString(),
  });
};

export const GET = async () => {
  return NextResponse.json({ ok: true, route: "/api/scan" });
};
