import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export const Navigation = component$(() => {
  return <div class="p-3 flex items-center justify-between bg-zinc-300 shadow-x1">
    <div class="">LOGO</div>
    <div class="mr-5">
      <ul class="flex space-x-10">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/test">Test</Link></li>
      </ul>
    </div>
  </div>
});