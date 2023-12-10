import { Signal, component$ } from "@builder.io/qwik";
import { Todo } from "../todo/todo";
import { TodoObj } from "~/routes";

export interface TodosProps {
  todos: Signal<TodoObj[]>;
}

export const Todos = component$<TodosProps>(({ todos }) => {
  return (
    <>
      <div class="mb-8">
        <ul class=" rounded-md  border-dark-gray-blue drop-shadow-sm">
          {todos.value.map((todo, i, e) => {
            const className = getTodoClass(i);
            return (
              <li key={todo.text} class={className}>
                <Todo index={i} text={todo.text} todos={todos} />
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
function getTodoClass(index: number, ): string {
  if (index === 0) {
    return "rounded-t-md bg-[white] w-full mt-[.105rem]  py-3  ";
  }
  return "bg-[white]  py-3 w-full mt-[.105rem] ";
}
