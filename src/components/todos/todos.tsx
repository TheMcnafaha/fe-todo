import {
  Signal,
  component$,
  useComputed$,
  useSignal,
  QwikDragEvent,
} from "@builder.io/qwik";
import { Todo } from "../todo/todo";
import { TodoObj } from "~/routes";
import { StatusesBar } from "../statuses-bar/statuses-bar";
export interface TodosProps {
  todos: Signal<TodoObj[]>;
}
export type TodoStatus = "completed" | "all" | "active";
export const Todos = component$<TodosProps>(({ todos }) => {
  const status = useSignal<TodoStatus>("all");
  const idx = useSignal(0);
  let filteredTodos = useComputed$(() => {
    if (status.value === "all") {
      return todos.value;
    }
    if (status.value === "active") {
      return todos.value.filter((todo) => !todo.completed);
    }
    return todos.value.filter((todo) => todo.completed);
  });
  const itemsLeft = filteredTodos.value.length;
  return (
    <>
      <div class="mb-8">
        <div class="rounded-b-lg rounded-t-lg">
          <ul
            preventdefault:dragover
            preventdefault:drop
            id="fav-ul"
            class="rounded-md border-dark-gray-blue drop-shadow-sm"
          >
            {filteredTodos.value.map((todo, i) => {
              const className = getTodoClass(i);
              return (
                <li
                  draggable={true}
                  key={todo.text}
                  class={className}
                  id={todo.id.toString()}
                  onDragStart$={(e: QwikDragEvent) => {
                    const dragID = (e.target as HTMLElement).id;
                    const draggedE = document.getElementById(dragID);
                    draggedE?.classList.toggle("opacity-40");
                    idx.value = i;
                  }}
                  onDragEnd$={(e) => {
                    const dragID = (e.target as HTMLElement).id;
                    const draggedE = document.getElementById(dragID);
                    draggedE?.classList.toggle("opacity-40");
                    const xd = document.elementsFromPoint(e.clientX, e.clientY);
                    const magic = xd.find((elem) => /[0-9]+/.test(elem.id));
                    const targetId = Number(magic!.id);
                    const targetTodoIdx = todos.value.findIndex(
                      (todo) => todo.id === targetId,
                    );
                    if (idx.value != targetTodoIdx) {
                      const tmp = todos.value[idx.value];
                      const placeHolder = [...todos.value];
                      placeHolder.splice(idx.value, 1);
                      placeHolder.splice(targetTodoIdx, 0, tmp);
                      todos.value = placeHolder;
                    }
                  }}
                >
                  <Todo todo={todo} text={todo.text} todos={todos} />
                </li>
              );
            })}
          </ul>
          <div class="flex justify-between rounded-b-md border-t-[1px]  border-t-light-gray-blue bg-[white] px-2 py-3 text-light-hover-gray-blue drop-shadow-sm dark:border-t-darker-gray-blue dark:bg-dark-saturated-blue ">
            <p>{itemsLeft} items left</p>
            <a
              onClick$={() => {
                todos.value = todos.value.filter(
                  (todo) => todo.completed === false,
                );
              }}
            >
              {" "}
              <p class="cursor-pointer hover:text-darker-gray-blue dark:hover:text-gray-hover-blue ">
                {" "}
                Clear Completed
              </p>{" "}
            </a>
          </div>
        </div>
      </div>
      <StatusesBar status={status} />
      <footer class="mt-10 flex justify-center bg-light-gray text-light-hover-gray-blue dark:bg-dark-blue dark:text-dark-gray-blue">
        Drag and drop to reorder list
      </footer>
    </>
  );
});
function getTodoClass(index: number): string {
  // border-b-2 border-b-light-gray dark:border-b-dark-gray-blue
  if (index === 0) {
    const className =
      "rounded-t-md bg-[white] dark:bg-dark-saturated-blue w-full  py-3 ";
    return className;
  }
  const className =
    "bg-[white] dark:bg-dark-saturated-blue py-3 w-full border-t-[1px] border-t-light-gray-blue dark:border-t-darker-gray-blue";
  return className;
}
//    onMouseDown$={ (e) => {
//      if (dragging.value) {
//       return
//      }
//    onsole.log("magic ",e);
//    dragging.value=true
//    const elem=document.getElementById("lol")
//    const rect=elem.getBoundingClientRect()
//    console.log("magic stuff ", rect);
//    console.log(elem);
//    // elem!.style.position="absolute"
//    elem!.style.top=e.y.toString()+"px"
//
// }}
//    onMouseMove$={(e ) => {
//      console.log("goodbye ",e.target.innerText);
//      if (dragging.value) {
//        const elem=document.getElementById("lol")
//    const rect=elem.getBoundingClientRect()
//    console.log("magic stuff ", rect);
//    console.log(elem);
//    // elem!.style.position="absolute"
//    elem!.style.top=e.y.toString()+"px"
//      }
//  }}>
