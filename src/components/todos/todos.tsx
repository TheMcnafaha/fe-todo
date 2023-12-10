import { Signal, component$, useSignal } from "@builder.io/qwik";
import { Todo } from "../todo/todo";
import { TodoObj } from "~/routes";
import { StatusesBar } from "../statuses-bar/statuses-bar";

export interface TodosProps {
  todos: Signal<TodoObj[]>;
}

export type TodoStatus="completed"|"all"|"active"
export const Todos = component$<TodosProps>(({ todos }) => {
  const status=useSignal<TodoStatus>("all")
  let filteredTodos=todos.value
  if (status.value==="completed") {
   const goodTodos=filteredTodos.filter(todo=>todo.completed===false)
    filteredTodos=goodTodos
  }
  return (
    <>
      <div class="mb-8">
        <ul class=" rounded-md  border-dark-gray-blue drop-shadow-sm">
          {filteredTodos.map((todo, i, e) => {
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
      <StatusesBar status={status}/>
    </>
  );
});
function getTodoClass(index: number, ): string {
  if (index === 0) {
    return "rounded-t-md bg-[white] w-full mt-[.105rem]  py-3  ";
  }
  return "bg-[white]  py-3 w-full mt-[.105rem] ";
}
