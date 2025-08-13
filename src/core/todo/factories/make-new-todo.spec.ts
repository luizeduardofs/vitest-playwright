import { makeNewTodo } from "./make-new-todo";

describe("makeNewTodo (unit)", () => {
  it("should return a new todo", () => {
    const expectedTodo = {
      id: expect.any(String),
      description: "My new todo",
      createdAt: expect.any(String),
    };

    const newTodo = makeNewTodo("My new todo");

    expect(newTodo.description).toBe(expectedTodo.description);
    expect(newTodo).toStrictEqual(expectedTodo);
  });
});
