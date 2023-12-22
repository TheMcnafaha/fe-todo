import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { AddTodo } from "~/components/add-todo/add-todo";
import { StatusesBar } from "~/components/statuses-bar/statuses-bar";
import { Todos } from "~/components/todos/todos";

export type TodoObj={
  text:string,
  completed:boolean
  id:number;
}
const defaultTodos:TodoObj[] = [
{text:  "Jog around the park 3x",completed:true, id:1234},
{text:  "10 minutes meditation",completed:false,id:2345},
  {text:  "Read for 1 hour",completed:true,id:3456},
  {text:  "Pick up groceries",completed:false,id:4567},
    {text:  "Complete Todo App on Frontend Mentor 💀💀💀",completed:false,id:5678},
];
export default component$(() => {
  const todos = useSignal<TodoObj[]>(defaultTodos);
  return (
    <>
<AddTodo todos={todos} />
<Todos todos={todos} />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
