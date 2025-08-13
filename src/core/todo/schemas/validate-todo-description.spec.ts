import { validateTodoDescription } from "./validate-todo-description";

describe("validateTodoDescription (unit)", () => {
  it("should return errors when description to have less them 4 characters", () => {
    const description = "abc";
    const result = validateTodoDescription(description);

    expect(result.errors).toStrictEqual([
      "Description should be more them 3 characters",
    ]);

    expect(result.success).toBe(false);
  });

  it("should return success when description to have more them 3 characters", () => {
    const description = "abcd";
    const result = validateTodoDescription(description);

    expect(result.errors).toStrictEqual([]);

    expect(result.success).toBe(true);
  });
});
