import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <div class="p-3">
      <h1>Home Page</h1>
      
  </div>
});

export const head: DocumentHead = {
  title: "revprox",
  meta: [
    {
      name: "description",
      content: "Reversw Proxy managing Docker containers",
    },
  ],
};
