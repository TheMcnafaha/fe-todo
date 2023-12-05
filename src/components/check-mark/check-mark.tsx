import { component$, useSignal } from "@builder.io/qwik";

export interface CheckMarkProps {}

export const CheckMark = component$<CheckMarkProps>((props) => {
  const clicked = useSignal(false);
  let className =
    "flex h-[1.15rem] w-[1.15rem] items-center justify-center  rounded-full border-[1px]  border-gray-hover-blue  ";
  if (clicked.value) {
    className =
      "flex h-[1.15rem] w-[1.15rem] items-center justify-center  rounded-full border-0  border-[1px] border-gray-hover-blue bg-gradient-to-br from-lg-cyan to-lg-magnenta ";
  }
  return (
    <div
      class={className}
      onClick$={(e) => {
        clicked.value = !clicked.value;
      }}
    >
      {clicked.value && <CheckSymbol />}
    </div>
  );
});

export const CheckSymbol = component$<CheckMarkProps>((props) => {
  return <img src="/icon-check.svg" alt="checked" />;
});
