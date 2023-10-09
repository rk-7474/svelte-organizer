<script>
  import { getDay, getDates } from '../lib/dates.js'

  const defaultDate = new Date()
  
  export let date = defaultDate
  
  $: dates = getDates(date)

  const selectDay = (giorno) => {
    date = giorno
  }
</script>

<main>
    <div class="relative mt-5 w-fit text-center flex flex-row border-t-[3px] border-solid border-stone-700 pl-3 pr-3" >
        {#each dates as giorno, index}
            <button on:click={() => selectDay(giorno)} class="day outline-none focus:outline-none group {index == 5 ? "selected" : "hover:bg-stone-700"}">
                <p class="text-5xl m-3 mt-12 w-14 cursor-pointer">{giorno.getDate()}</p>
                <div class="w-min text-xl group-hover:scale-100 scale-0 transition-all rounded-xl bg-stone-900 p-2 pl-5 pr-5">{getDay(giorno).substring(0, 3)}</div>
            </button>
        {/each}
    </div>
</main>
