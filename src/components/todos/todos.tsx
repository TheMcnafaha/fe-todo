import { Signal, component$, useComputed$, useSignal, useTask$ } from "@builder.io/qwik";
import { Todo } from "../todo/todo";
import { TodoObj } from "~/routes";
import { StatusesBar } from "../statuses-bar/statuses-bar";

export interface TodosProps {
  todos: Signal<TodoObj[]>;
}

export type TodoStatus="completed"|"all"|"active"
export const Todos = component$<TodosProps>(({ todos }) => {
  const status=useSignal<TodoStatus>("all")
  let filteredTodos=useComputed$( ( ) => { 
    if (status.value==="all") {
     return todos.value 
    }
    if (status.value==="active") {
     return todos.value.filter(todo=>!todo.completed) 
    }
    return todos.value.filter(todo=>todo.completed)
  })
  const itemsLeft=filteredTodos.value.length 
  return (
    <>
      <div class="mb-8">
        <div class="dark:bg-dark-gray-blue rounded-t-lg rounded-b-lg">
<ul class=" rounded-md border-dark-gray-blue drop-shadow-sm">
          {filteredTodos.value.map((todo, i, e) => {
            const className = getTodoClass(i);
            return (
              <li key={todo.text} class={className}>
                <Todo todo={todo} text={todo.text} todos={todos} />
              </li>
            );
          })}
        </ul>
        <div class=" mt-[.1rem] flex justify-between rounded-b-md bg-[white] dark:bg-dark-saturated-blue px-2 py-3 drop-shadow-sm ">
          <p>{itemsLeft} items left</p>
          <a onClick$={( ) => { 
todos.value=todos.value.filter(todo=>todo.completed===false)
          }}> <p> Clear Completed</p> </a>
          
        </div>
        </div>
      </div>
      <StatusesBar status={status}/>
    </>
  );
});
function getTodoClass(index: number, ): string {
  if (index === 0) {
    return "rounded-t-md bg-[white] dark:bg-dark-saturated-blue w-full mt-[.105rem]  py-3  ";
  }
  return "bg-[white] dark:bg-dark-saturated-blue  py-3 w-full mt-[.105rem] ";
}
