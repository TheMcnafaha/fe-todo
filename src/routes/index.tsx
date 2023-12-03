import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { AddTodo } from "~/components/add-todo/add-todo";
import { StatusesBar } from "~/components/statuses-bar/statuses-bar";
import { Todos } from "~/components/todos/todos";

export default component$(() => {
  return (
    <>
      <AddTodo />
      <Todos />
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
