import { $, component$, useStore } from '@builder.io/qwik';
import { Button } from '~/components';

export default component$(() => {

  const state = useStore({name: 'unknown'})
  const handleName = $(()=>{state.name = 'Sweety'})
  
  return <div class="p-3">
    <h1>Test Page</h1>
    <div class="p-10">
      <Button handleFunction={handleName} />
      <div class="py-5">Name: {state.name}</div>
    </div>
    

  </div>
});