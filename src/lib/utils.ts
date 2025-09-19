// ---- URL helpers ----

export const isUrlLike = (s: string) => /^https?:\/\//i.test(s.trim());

export const classifyInput = (input?: string) => {
  // always a string, always trimmed
  const original = (input ?? "").trim();

  if (original === "") {
    return { kind: "empty", value: "", reason: "no input" };
  }

  if (isUrlLike(original)) {
    return { kind: "url", value: original, reason: "starts with http(s)" };
  }

  if (original.startsWith("www.")) {
    return {
      kind: "url",
      value: `https://${original}`,
      reason: "starts with www",
    };
  }

  return { kind: "text", value: original, reason: "plain text" };
};
