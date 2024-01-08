import { component$ } from "@builder.io/qwik";

export interface CheckMarkProps {
  clicked: boolean;
}

export const CheckMark = component$<CheckMarkProps>(({ clicked }) => {
  let className =
    "flex h-[1.15rem] w-[1.15rem] items-center justify-center  rounded-full border-[1px]  border-gray-hover-blue  cursor-pointer ";
  if (clicked) {
    className =
      "flex h-[1.15rem] cursor-pointer w-[1.15rem] items-center justify-center  rounded-full border-0   border-gray-hover-blue bg-gradient-to-br from-lg-cyan to-lg-magnenta ";
  }
  return <div class={className}>{clicked && <CheckSymbol />}</div>;
});

export const CheckSymbol = component$(() => {
  return <img src="/icon-check.svg" alt="checked" />;
});
