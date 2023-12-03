import { component$, useSignal } from "@builder.io/qwik";

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
        <ul class=" border-dark-gray-blue  rounded-md drop-shadow-sm">
          {todos.value.map((todo, i, e) => {
            const className = getTodoClass(i, e.length);
            return (
              <li key={i} class={className}>
                {todo}
              </li>
            );
          })}
        </ul>
        <div class=" m-[.105rem] flex justify-between rounded-b-md bg-[white] px-2 py-3 drop-shadow-sm ">
          <p>5 items left</p>
          <p> Clear Completed</p>
        </div>
      </div>
    </>
  );
});
function getTodoClass(index: number, length: number): string {
  if (index === 0) {
    return "rounded-t-md bg-[white] m-[.105rem] px-2 py-3  ";
  }
  return "bg-[white] px-2 py-3 m-[.105rem] ";
}
