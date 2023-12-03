import { component$, useSignal } from "@builder.io/qwik";

export interface TodosProps {}

const defaultTodos = [
  "Jog around the park 3x",
  "10 minutes meditation",
  "Read for 1 hour",
  "Pick up groceries",
  "Complete Todo App on Frontend Mentor 💀💀💀",
];
export const Todos = component$<TodosProps>((props) => {
  const todos = useSignal<string[]>(defaultTodos);
  return (
    <ul>
      {todos.value.map((todo, i) => {
        return <li key={i}>{todo}</li>;
      })}
    </ul>
  );
});
