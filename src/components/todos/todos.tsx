import { Signal, component$, useSignal } from "@builder.io/qwik";
import { CheckMark } from "../check-mark/check-mark";
import { Todo } from "../todo/todo";

export interface TodosProps {
  todos: Signal<string[]>;
}

export const Todos = component$<TodosProps>(({ todos }) => {
  return (
    <>
      <div class="mb-8">
        <ul class=" rounded-md  border-dark-gray-blue drop-shadow-sm">
          {todos.value.map((todo, i, e) => {
            const className = getTodoClass(i, e.length);
            return (
              <li key={i} class={className}>
                <Todo index={i} text={todo} todos={todos} />
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
function deleteTodo(index: number, todos: Signal<string[]>) {
  const goodTodo = todos.value.filter((e, i) => i !== index);
  todos.value = goodTodo;
}
