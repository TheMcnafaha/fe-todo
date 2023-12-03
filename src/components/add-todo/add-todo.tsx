import { component$ } from "@builder.io/qwik";

export interface AddTodoProps {}

export const AddTodo = component$<AddTodoProps>((props) => {
  return (
    <div class="my-2 rounded-md bg-[white] px-2 py-3 drop-shadow-sm">
      <input type="text" placeholder="Create a new todo..." />
    </div>
  );
});
