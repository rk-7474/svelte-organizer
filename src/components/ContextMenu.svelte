<script>
    export let pos = { x: 0, y: 0 };
	export let showMenu = false;
	
	function closeMenu() {
		showMenu = false;
	}
</script>

<main>
    {#if (showMenu)}
        <div {...pos} on:clickoutside={closeMenu} on:click={closeMenu} class="absolute w-20 h-20 bg-white">
            <button>

            </button>
        </div>
    {/if}
    
</main>
