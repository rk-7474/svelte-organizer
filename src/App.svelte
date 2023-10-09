<script>
  import AddButton from './components/AddButton.svelte';
  import Note from './components/Note.svelte';
  import DateManager from './components/dateManager.svelte';
  import moment from 'moment'
  let date;

  let organizerInfo = {}

  $: dateId = moment(date).format("YYYYMMDD");

</script>

<main>
  <div class="flex items-center justify-center">
    <DateManager bind:date/>
  </div>

  <div class="flex-col w-screen h-fit flex justify-center items-center">
    {#each organizerInfo[dateId] || [] as note}
      <Note bind:note/>
    {/each}

    <AddButton bind:notes={organizerInfo[dateId]}/>
  </div>
</main>

<style>
</style>
