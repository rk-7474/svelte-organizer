<script>
    export let notes = [];

    const randomColor = () => Math.floor(Math.random() * 3)

    const handleClick = () => notes = [...notes || [], {type: "task", name: "Nuova attività", color: randomColor(), data: []}] 

</script>

<main class="w-1/3 h-16 m-5 flex flex-row items-center transition-all opacity-10 hover:opacity-100">
    <button on:click={handleClick} class="outline-none active:translate-y-0.5 focus:outline-none w-full h-full justify-self-start rounded-xl transition-all bg-black border-solid cursor-pointer hover:bg-zinc-900 flex justify-center items-center">
        <span class="material-symbols-outlined">
            add
        </span>
    </button>
</main>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,600,0,0");
</style>

