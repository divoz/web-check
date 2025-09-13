"use client";

import { useState } from "react";

const ScanPage = () => {
  type ScanResult = null | { ok: boolean; error?: string };

  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<ScanResult>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input }),
      });

      const data = await res.json();
      setResult(data);
    } catch (err: unknown) {
      setResult({ ok: false, error: String(err) });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto max-w-3xl p-6 space-y-4">
      <h1 className="text-2xl font-bold">Scan</h1>

      <form onSubmit={onSubmit} className="space-y-3">
        <textarea
          className="w-full h-40 border rounded p-3"
          placeholder="Paste text or a URL; this demo just echoes it."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 rounded bg-black text-white disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Sending..." : "Run scan"}
        </button>
      </form>

      <section className="border rounded p-3">
        <h2 className="font-semibold mb-2">Response</h2>
        <pre className="whitespace-pre-wrap text-sm">
          {result ? JSON.stringify(result, null, 2) : "No response yet."}
        </pre>
      </section>
    </main>
  );
};

export default ScanPage;
