import { Signal, component$ } from "@builder.io/qwik";
import { CheckMark } from "../check-mark/check-mark";

export interface AddTodoProps {
  todos: Signal<string[]>;
}

export const AddTodo = component$<AddTodoProps>(({ todos }) => {
  return (
    <form
      class="my-2 flex items-center gap-3 rounded-md bg-[white] py-3 pl-6 drop-shadow-sm"
      preventdefault:submit
      onSubmit$={() => {
        const input = document.getElementById("addTodo") as HTMLInputElement;
        const text = input.value;
        if (text !== "") {
          todos.value = [...todos.value, text];
          input.value = "";
        }
        console.log("submitted: ", text);
      }}
    >
      <CheckMark clicked={false} />
      <input id="addTodo" type="text" placeholder="Create a new todo..." />
    </form>
  );
});
