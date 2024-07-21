import { $, component$, useSignal, useStore, useTask$ } from '@builder.io/qwik';

interface Props {
  handleFunction: ()=>{}
}

export const Button = component$((props: Props) => {
  const message = useSignal("Signal Message")
  console.log(message.value)

  const state = useStore({message: "Store Message", count: 0})

  useTask$(({track}) => {
    track(state)
    console.log(state.message, state.count) // Store Message
  })

  return <button 
            onClick$={props.handleFunction}
            class="bg-sky-500 py-2 px-4 rounded-sm text-white hover:bg-sky-400">
    Click me!
  </button>
});