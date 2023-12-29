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
      <div class="absolute -z-10 h-48 w-full max-w-sm bg-slate-400 bg-mobile-bg bg-cover dark:bg-dark-mobile-bg md:max-w-full md:bg-desktop-bg dark:md:bg-dark-desktop-bg">
        {" "}
      </div>
      <div class=" max-w-xs md:max-w-md ">
        <main class="dark:text-grey-blue">
          <Slot />
        </main>
      </div>
    </>
  );
});
<img class="absolute -z-10" src="./public/bg-mobile-light.jpg" alt="" />;
