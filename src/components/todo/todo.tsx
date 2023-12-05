import { component$, useSignal } from "@builder.io/qwik";
import { CheckMark } from "../check-mark/check-mark";

export interface TodoProps {
  text: string;
}

export const Todo = component$<TodoProps>(({ text }) => {
  const clicked = useSignal(false);
  let className = " wrap flex w-full flex-wrap items-center gap-3 pl-6";
  if (clicked.value) {
    className =
      "  wrap flex w-full flex-wrap items-center gap-3 pl-6 line-through";
  }
  return (
    <a
      class={className}
      onClick$={() => {
        clicked.value = !clicked.value;
      }}
    >
      <CheckMark clicked={clicked.value} />
      {text}
    </a>
  );
});
