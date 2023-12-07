import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { AddTodo } from "~/components/add-todo/add-todo";
import { StatusesBar } from "~/components/statuses-bar/statuses-bar";
import { Todos } from "~/components/todos/todos";

const defaultTodos = [
  "Jog around the park 3x",
  "10 minutes meditation",
  "Read for 1 hour",
  "Pick up groceries",
  "Complete Todo App on Frontend Mentor 💀💀💀",
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
