import { component$ } from "@builder.io/qwik";

export interface StatusesBarProps {}

export const StatusesBar = component$<StatusesBarProps>((props) => {
  return (
    <div class="flex justify-around rounded-md bg-[white] px-3 py-4 drop-shadow-sm ">
      <div> All </div>
      <div>Active</div>
      <div>Completed</div>
    </div>
  );
});
