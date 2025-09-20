// ---- URL helpers ----

export const isWebAddress = (s: string) =>
  /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/i.test(
    s.trim()
  );

const startsWithHttp = (s: string) => /^https?:\/\//i.test(s);
const startsWithWww = (s: string) => /^www\./i.test(s);

export const classifyInput = (input: string) => {
  const v = (input ?? "").toLowerCase().trim();

  if (v === "") {
    return { kind: "empty", value: "", reason: "no input" };
  }

  if (startsWithHttp(v) || startsWithWww(v)) {
    if (isWebAddress(v)) {
      return { kind: "url", value: v, reason: "it has a url format" };
    }
    return { kind: "text", value: v, reason: "invalid URL format" };
  }

  return { kind: "text", value: v, reason: "plain text" };
};
