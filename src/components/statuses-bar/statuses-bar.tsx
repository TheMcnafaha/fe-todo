import { component$ } from "@builder.io/qwik";

export interface StatusesBarProps {}

export const StatusesBar = component$<StatusesBarProps>((props) => {
  return (
    <div class="flex justify-between">
      <div> All </div>
      <div>Active</div>
      <div>Completed</div>
    </div>
  );
});
