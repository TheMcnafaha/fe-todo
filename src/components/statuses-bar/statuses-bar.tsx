import { Signal, component$ } from "@builder.io/qwik";
import { TodoStatus } from "../todos/todos";

export interface StatusesBarProps {
  status:Signal<TodoStatus>
}

export const StatusesBar = component$<StatusesBarProps>(({status}) => {
  const statuses=["All","Active","Completed", ]
  return (
    <div class="flex justify-around  rounded-md bg-[white] dark:bg-dark-saturated-blue px-3 py-4 drop-shadow-sm ">
      {statuses.map(e=>{
        if (e.toLowerCase()===status.value) {
         return (
            <>
         <div key={e} class=" text-bright-blue"> {e} </div>
            </>
         ) 
        }
        return (
        <div onClick$={(elem) => { 
            const input=elem.target as HTMLElement
const text=input.innerText.toLowerCase()  as TodoStatus
            console.log(text);
           status.value=text
          }}
key={e}
          > {e}</div>
        )
      })}
    </div>
  );
});
