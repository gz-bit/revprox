import { component$ } from '@builder.io/qwik';
import { Button } from '~/components';

export default component$(() => {
  return <div class="p-3">
    <h1>Test Page</h1>
    <div class="p-10">
    <Button />
    </div>
    

  </div>
});