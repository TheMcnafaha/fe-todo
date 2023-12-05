import { component$ } from "@builder.io/qwik";
import { CheckMark } from "../check-mark/check-mark";

export interface AddTodoProps {}

export const AddTodo = component$<AddTodoProps>((props) => {
  return (
    <div class="my-2 flex items-center gap-3 rounded-md bg-[white] py-3 pl-6 drop-shadow-sm">
      <CheckMark />
      <input type="text" placeholder="Create a new todo..." />
    </div>
  );
});
