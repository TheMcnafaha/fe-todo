import { Signal, component$, useSignal } from "@builder.io/qwik";
import { CheckMark } from "../check-mark/check-mark";
import { TodoObj } from "~/routes";

export interface TodoProps {
  text: string;
  todo:TodoObj;
  todos: Signal<TodoObj[]>;
}

export const Todo = component$<TodoProps>(({ text, todo, todos }) => {
  const clicked = todo.completed
  const index=todos.value.indexOf(todo)
  let className = " wrap cursor-pointer flex w-full flex-wrap items-center gap-3 pl-6";
  if (clicked) {
    className =
      "  wrap flex w-full dark:text-dark-gray-blue flex-wrap items-center gap-3 pl-6 line-through";
  }
  return (
    <div class="flex items-center">
      <a
        class={className}
        onClick$={() => {
          const goodTodos=todos.value.map((todo,i)=>{
            if (i===index) {
            return {...todo,completed:!todo.completed} 
            }
            return todo
          })
          todos.value=goodTodos
        }}
      >
        <CheckMark clicked={clicked} />
        {text}
      </a>

      <a
        class="cursor-pointer pr-4"
        onClick$={() => {
          const goodTodo = todos.value.filter((e, i) => i !== index);
          todos.value = goodTodo;
          localStorage.setItem("todos",JSON.stringify(goodTodo))
        }}
      >
        <img src="/icon-cross.svg" alt="" />
      </a>
    </div>
  );
});
