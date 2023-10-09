<script>
    import DynamicArea from "./DynamicArea.svelte";
    import DynamicRow from "./DynamicRow.svelte";
    import ContextMenu from "./ContextMenu.svelte"
    import { fade } from "svelte/transition";

    export let note;
    
    let hovered = false

    let pos = {x: 0, y: 0}

    let showMenu = false;

    const openMenu = (e) => {
        pos = { x: e.clientX, y: e.clientY }
        showMenu = true
    }

    const colors = [
        "blue",
        "red",
        "green"
    ]
    
    const closeMenu = () => showMenu = false

    const changeColor = () => {
        note.color++;
        if (note.color >= 3) note.color = 0 
    }

</script>

<main>
    <div role="menu" tabindex="0" on:mouseenter={() => hovered = true} on:mouseleave={() => hovered = false} 
    class="relative flex {colors[note.color]} shadow-lg w-full rounded-xl p-8 flex-col justify-start drop-shadow-xl"> 

        <DynamicRow bind:value={note.name}/>
        <DynamicArea {hovered} bind:data={note.data}/>
        
        {#if (hovered)}
            <button transition:fade={{duration: 100}} on:click={openMenu} 
            class="opacity-50 hover:opacity-100 absolute focus:outline-none outline-none cursor-pointer right-3 top-4 material-symbols-outlined drop-shadow-md active:translate-y-0.5 transition-all">
                <span>more_vert</span>
            </button>

            <button transition:fade={{duration: 100}} on:click={changeColor} 
            class="opacity-50 hover:opacity-100 absolute focus:outline-none outline-none cursor-pointer right-20 top-4 material-symbols-outlined drop-shadow-md active:translate-y-0.5 transition-all">
                <span>palette</span>
            </button>
        {/if}

        <ContextMenu {pos} bind:showMenu/>
    </div>
</main>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,600,0,0");
    @import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,600,1,0");


    .blue {
        background: radial-gradient(circle, rgba(76, 193, 225, 0.603) 0%, rgba(51, 166, 211, 0.6) 50%, rgba(5,156,230,0.5970763305322129) 100%);
    }

    .red {
        background: radial-gradient(circle, rgba(227, 172, 108, 0.6) 0%, rgba(221,132,73,0.6) 30%, rgba(181, 44, 13, 0.6) 100%);
    }

    .green {
        background: radial-gradient(circle, rgba(85, 176, 9, 0.6) 0%, rgba(71, 205, 93, 0.6) 30%, rgba(28,230,5,0.6) 100%);
    }
</style>