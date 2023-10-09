<script>
    import Task from "./Task.svelte";
    import { fade } from "svelte/transition";
    export let note;
</script>

<main class="w-1/3 m-10" transition:fade={{ duration: 250 }}>
    {#if (note.type === "task")}
        <Task bind:note/>
    {/if}
</main>