import { component$, Slot, useOnDocument, $ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <>
      <img class="absolute -z-10" src="./public/bg-mobile-light.jpg" alt="" />
      <div class=" max-w-xs ">
        <header class=" flex   justify-between px-2 py-8 text-2xl font-bold tracking-widest text-[white]">
          <h1>TODO</h1>
          <a id="toggle-theme" onClick$={ ( ) => { 
console.log("change  theme");
            document.querySelector("html")?.classList.toggle("dark")
}} >
            <div id="theme-img"> 
<img class="dark:hidden block" src="/icon-sun.svg" alt="" />
<img class="hidden dark:block" src="/icon-moon.svg" alt="" />
            </div>
          </a>
        </header>
        <main class="dark:text-grey-blue">
          <Slot />
        </main>
        <footer class="mt-10 flex justify-center bg-light-gray dark:bg-dark-blue dark:text-dark-gray-blue text-light-hover-gray-blue">
          Drag and drop to reorder list
        </footer>
      </div>
    </>
  );
});
