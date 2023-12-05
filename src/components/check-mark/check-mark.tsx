import { component$ } from "@builder.io/qwik";

export interface CheckMarkProps {}

export const CheckMark = component$<CheckMarkProps>((props) => {
  return (
    <div class="h-[1.15rem] w-[1.15rem]  rounded-full border-[1px]  border-gray-hover-blue  "></div>
  );
});
