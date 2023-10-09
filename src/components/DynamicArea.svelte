<script>
    import Checkbox from "./Checkbox.svelte";
    import { canEdit } from '../lib/stores.js'
    import { fade } from "svelte/transition";


    export let data = [];
    export let hovered;

    let editMode = false;
    let value = "";

    const enableEdit = async () => {
        if (!$canEdit) return

        await sleep(110)

        editMode = !($canEdit = false)
        value = ""
        for (let line of data) {
            value += line.text + '<br>'
        }
    }

    const disableEdit = async () => {
        editMode = !($canEdit = true)

        value = value
            .replaceAll("</div>", "")
            .replaceAll("<div>", "<br>")

        const lines = (value || "").split("<br>");
        data = []
        for (let line of lines) {
            if (!line) continue;
            const index = data.find( ({ text }) => text == line);

            if (!index) data = [...data, {text: line, done: false}]
            else data = [...data, {text: line, done: index.done}]
        }
    }

    const handleKey = ({keyCode, shiftKey}) => {
        if (keyCode == 27 || (keyCode == 13 && !shiftKey)) disableEdit()
    }

    const init = (elem) => elem.focus() 

    const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds))

</script>


{#if (editMode)}
    <div contenteditable  
        on:focusout={disableEdit} 
        on:keyup={handleKey} 
        bind:innerHTML={value}
        use:init
        role="menu"
        tabindex="0"/>
{:else}
    {#if (hovered)}
        <button transition:fade={{duration: 100}} on:click={enableEdit} class="absolute opacity-50 hover:opacity-100 flex items-center right-11 top-4 active:translate-y-0.5 transition-all">
            <span class="material-symbols-outlined drop-shadow-md">
                edit
            </span>
        </button>
    {/if}

    {#each data as {done, text}}
        <Checkbox bind:done={done} {text}/>
    {/each}
{/if}

<style>
    @import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,600,1,0");

    div[contenteditable] {
        background-color: rgba(0, 0, 0, 0.1);
        border: none;
        outline: none;
        resize: none;
        height: auto;
        font-size: 1.3em
    }

    button {
        outline: none;
        border: none
    }
</style>
