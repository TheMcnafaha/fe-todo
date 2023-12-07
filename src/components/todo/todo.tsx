import { Signal, component$, useSignal } from "@builder.io/qwik";
import { CheckMark } from "../check-mark/check-mark";

export interface TodoProps {
  text: string;
  index: number;
  todos: Signal<string[]>;
}

export const Todo = component$<TodoProps>(({ text, index, todos }) => {
  const clicked = useSignal(false);
  let className = " wrap flex w-full flex-wrap items-center gap-3 pl-6";
  if (clicked.value) {
    className =
      "  wrap flex w-full flex-wrap items-center gap-3 pl-6 line-through";
  }
  return (
    <div class="flex items-center">
      <a
        class={className}
        onClick$={() => {
          clicked.value = !clicked.value;
        }}
      >
        <CheckMark clicked={clicked.value} />
        {text}
      </a>

      <a
        class="cursor-pointer pr-4"
        onClick$={() => {
          const goodTodo = todos.value.filter((e, i) => i !== index);
          todos.value = goodTodo;
        }}
      >
        <img src="/icon-cross.svg" alt="" />
      </a>
    </div>
  );
});
