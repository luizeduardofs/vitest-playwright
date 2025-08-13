import { sanitizeStr } from "./sanitize-str";

describe("sanitizeStr (unit)", () => {
  it("should return a empty string if received false value", () => {
    // @ts-expect-error testing function with no params
    expect(sanitizeStr()).toBe("");
  });

  it("should return a empty string if received value that no be a string", () => {
    // @ts-expect-error testing function wrong type
    expect(sanitizeStr(123)).toBe("");
  });

  it("should make trim on a string", () => {
    expect(sanitizeStr("  ab ")).toBe("ab");
  });

  it("should make normalization on string with NFC", () => {
    const original = "e\u0301";
    const expected = "é";

    expect(expected).toBe(sanitizeStr(original));
  });
});
