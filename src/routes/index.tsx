import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { AddTodo } from "~/components/add-todo/add-todo";
import { StatusesBar } from "~/components/statuses-bar/statuses-bar";
import { Todos } from "~/components/todos/todos";

export type TodoObj={
  text:string,
  completed:boolean
  id:number;
}
const defaultTodos:TodoObj[] = [
{text:  "Jog around the park 3x",completed:true, id:1234},
{text:  "10 minutes meditation",completed:false,id:2345},
  {text:  "Read for 1 hour",completed:true,id:3456},
  {text:  "Pick up groceries",completed:false,id:4567},
    {text:  "Complete Todo App on Frontend Mentor 💀💀💀",completed:false,id:5678},
];
export default component$(() => {
  const todos = useSignal<TodoObj[]>(defaultTodos);
  const checked=useSignal(false)
  useVisibleTask$( ( ) => { 
 const savedTodos=localStorage.getItem("todos")
    if (savedTodos===null) {
     localStorage.setItem("todos",JSON.stringify(todos.value)) 
      return
    }else{
      const maybe=localStorage.getItem("todos") as string
      const yes=JSON.parse(maybe)
      todos.value=yes
    }
    checked.value=true
  })
  return (
    <>
<AddTodo todos={todos} />
      {checked.value?<Todos todos={todos}/>: <div class="invisible bg-gray-600"><Todos todos={todos}/></div> }
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
