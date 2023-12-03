import { component$ } from "@builder.io/qwik";

export interface AddTodoProps {}

export const AddTodo = component$<AddTodoProps>((props) => {
  return (
    <div>
      <input type="text" placeholder="Create a new todo..." />
    </div>
  );
});
