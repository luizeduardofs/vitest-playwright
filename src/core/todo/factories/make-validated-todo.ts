import { sanitizeStr } from "@/utils/sanitize-str";
import { Todo } from "../schemas/todo-contract";
import { validateTodoDescription } from "../schemas/validate-todo-description";
import { makeNewTodo } from "./make-new-todo";

type ValidTodo = {
  success: true;
  data: Todo;
};

type InValidTodo = {
  success: false;
  errors: string[];
};

type MakeValidatedTodo = ValidTodo | InValidTodo;

export function makeValidatedTodo(description: string): MakeValidatedTodo {
  const cleanDescription = sanitizeStr(description);
  const validatedDescription = validateTodoDescription(cleanDescription);

  if (validatedDescription.success) {
    return {
      success: true,
      data: makeNewTodo(cleanDescription),
    };
  }

  return {
    success: false,
    errors: validatedDescription.errors,
  };
}
