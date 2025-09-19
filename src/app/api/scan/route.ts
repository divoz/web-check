import { classifyInput } from "@/lib/utils";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const body = await req.json().catch(() => ({}));
  const { kind, value, reason } = classifyInput(body.received);

  return NextResponse.json({
    // received: body.input === "" ? "Empty input — nothing to scan" : body,
    // at: new Date().toISOString(),
    input: { kind, value, reason },
    at: new Date().toISOString(),
  });
};

export const GET = async () => {
  return NextResponse.json({ ok: true, route: "/api/scan" });
};
