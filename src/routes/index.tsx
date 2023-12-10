import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { AddTodo } from "~/components/add-todo/add-todo";
import { StatusesBar } from "~/components/statuses-bar/statuses-bar";
import { Todos } from "~/components/todos/todos";

export type TodoObj={
  text:string,
  completed:boolean
}
const defaultTodos:TodoObj[] = [
{text:  "Jog around the park 3x",completed:false},
{text:  "10 minutes meditation",completed:false},
  {text:  "Read for 1 hour",completed:false},
  {text:  "Pick up groceries",completed:false},
    {text:  "Complete Todo App on Frontend Mentor 💀💀💀",completed:false},
];
export default component$(() => {
  const todos = useSignal<string[]>(defaultTodos);
  return (
    <>
      <AddTodo todos={todos} />
      <Todos todos={todos} />
      <StatusesBar />
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
