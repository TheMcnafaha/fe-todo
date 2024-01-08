import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { AddTodo } from "~/components/add-todo/add-todo";
import { Todos } from "~/components/todos/todos";

export type TodoObj = {
  text: string;
  completed: boolean;
  id: number;
};
const defaultTodos: TodoObj[] = [
  { text: "Jog around the park 3x", completed: true, id: 1234 },
  { text: "10 minutes meditation", completed: false, id: 2345 },
  { text: "Read for 1 hour", completed: true, id: 3456 },
  { text: "Pick up groceries", completed: false, id: 4567 },
  {
    text: "Complete Todo App on Frontend Mentor 💀💀💀",
    completed: false,
    id: 5678,
  },
];
export default component$(() => {
  const todos = useSignal<TodoObj[]>(defaultTodos);
  const checked = useSignal(false);
  useVisibleTask$(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos === null) {
      localStorage.setItem("todos", JSON.stringify(todos.value));
      return;
    } else {
      const maybe = localStorage.getItem("todos") as string;
      const yes = JSON.parse(maybe);
      todos.value = yes;
    }
    checked.value = true;
  });
  return (
    <>
      {checked.value && (
        <header class=" flex justify-between py-8  text-3xl font-bold tracking-widest text-[white]">
          <h1>TODO</h1>
          <a
            id="toggle-theme"
            onClick$={() => {
              console.log("change  theme");
              document.querySelector("html")?.classList.toggle("dark");
            }}
          >
            <div id="theme-img">
              <img class="block dark:hidden" src="/icon-sun.svg" alt="" />
              <img class="hidden dark:block" src="/icon-moon.svg" alt="" />
            </div>
          </a>
        </header>
      )}
      {checked.value && <AddTodo todos={todos} />}
      {checked.value && <Todos todos={todos} />}{" "}
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
