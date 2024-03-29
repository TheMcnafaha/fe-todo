import { Signal, component$ } from "@builder.io/qwik";
import { CheckMark } from "../check-mark/check-mark";
import { TodoObj } from "~/routes";

export interface AddTodoProps {
  todos: Signal<TodoObj[]>;
}

export const AddTodo = component$<AddTodoProps>(({ todos }) => {
  return (
    <form
      class="my-2 flex  items-center gap-3 rounded-md bg-[white] dark:bg-dark-saturated-blue  py-3 pl-6 drop-shadow-sm"
      preventdefault:submit
      onSubmit$={() => {
        const input = document.getElementById("addTodo") as HTMLInputElement;
        const text = input.value;
        const randFourDig=Math.floor(Math.random()*10000)
        if (text !== "") {
          todos.value = [...todos.value, {text:text,completed:false,id:randFourDig}];
          input.value = "";
          localStorage.setItem("todos",JSON.stringify(todos.value))
        }
        console.log("submitted: ", text);
      }}
    >
      <CheckMark clicked={false} />
      <input class="dark:bg-dark-saturated-blue" id="addTodo" type="text" placeholder="Create a new todo..." />
    </form>
  );
});
