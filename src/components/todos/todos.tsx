import { component$, useSignal } from "@builder.io/qwik";
import { CheckMark } from "../check-mark/check-mark";
import { Todo } from "../todo/todo";

export interface TodosProps {}

const defaultTodos = [
  "Jog around the park 3x",
  "10 minutes meditation",
  "Read for 1 hour",
  "Pick up groceries",
  "Complete Todo App on Frontend Mentor 💀💀💀",
];
export const Todos = component$<TodosProps>((props) => {
  const todos = useSignal<string[]>(defaultTodos);
  return (
    <>
      <div class="mb-8">
        <ul class=" rounded-md  border-dark-gray-blue drop-shadow-sm">
          {todos.value.map((todo, i, e) => {
            const className = getTodoClass(i, e.length);
            return (
              <li key={i} class={className}>
                <Todo text={todo} />
              </li>
            );
          })}
        </ul>
        <div class=" mt-[.105rem] flex justify-between rounded-b-md bg-[white] px-2 py-3 drop-shadow-sm ">
          <p>5 items left</p>
          <p> Clear Completed</p>
        </div>
      </div>
    </>
  );
});
function getTodoClass(index: number, length: number): string {
  if (index === 0) {
    return "rounded-t-md bg-[white] w-full mt-[.105rem]  py-3  ";
  }
  return "bg-[white]  py-3 w-full mt-[.105rem] ";
}
