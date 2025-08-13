export function sanitizeStr(text: string): string {
  const clean =
    !text || typeof text !== "string" ? "" : text.trim().normalize();

  return clean;
}
