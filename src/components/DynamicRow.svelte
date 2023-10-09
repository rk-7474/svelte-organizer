<script lang="ts">
    import { canEdit } from '../lib/stores.js'
    export let value: string = "Nuova task";

    let editMode = false;
    let lastValue = "";

    const enableEdit = async () => {
        if (!$canEdit) return

        lastValue = value;

        await sleep(110);

        editMode = !($canEdit = false)
    }

    const disableEdit = () => {
        editMode = !($canEdit = true)

        if (value == "") value = lastValue
    }

    const handleKey = ({keyCode}: any) => {
        if (keyCode == 13 || keyCode == 27) disableEdit()
    }

    const init = (elem: any) => elem.focus() 

    const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds))

    $: console.log(value)

</script>


{#if (editMode)}
    <input class="mb-3 border-none outline-none text-2xl w-3/4"
        on:focusout={disableEdit} 
        on:keyup={handleKey} 
        bind:value
        use:init> 
{:else}
    <button on:click={enableEdit} class="bg-transparent active:outline-none focus:outline-none outline-none border-none active:translate-y-0.5 transition-all">
        <h1 class="mb-3 drop-shadow-lg text-2xl text-left cursor-pointer">{value}</h1>
    </button>
{/if}

<style>
    input {
        background-color: rgba(0, 0, 0, 0.1);
    }
</style>