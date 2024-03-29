import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import "@fontsource/josefin-sans/400.css";
import "@fontsource/josefin-sans/700.css";
import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <script
          dangerouslySetInnerHTML={`
        (function() {
const isDarkmode=window.matchMedia('(prefers-color-scheme: dark)').matches
  if (isDarkmode) {
   document.querySelector("html")?.classList.add("dark")
  }  
        })();
      `}
        ></script>
      </head>
      <body
        lang="en"
        class="flex flex-col items-center bg-light-gray font-josefin dark:bg-dark-blue"
      >
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
