import { component$, useSignal, useStore, useTask$ } from '@builder.io/qwik';

export const Button = component$(() => {
  const message = useSignal("Signal Massage")
  const state = useStore({message: "Store Message"})

  console.log(message.value)
  useTask$(() => {
    console.log(state.message)
  })
  return <button class="bg-sky-500 py-2 px-4 rounded-sm text-white hover:bg-sky-400">
    Click me!
  </button>
});