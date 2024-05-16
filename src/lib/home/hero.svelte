<script>
	import { fade } from 'svelte/transition';
        import { onMount } from 'svelte';
	let visible = false;

        onMount(() => {
        // Set visible to true after a short delay to trigger the fade-in transition
        setTimeout(() => {
            visible = true;
        }, 200);
    });
</script>

<header class="hero">
        <img class="absolute left-0 top-0 min-h-full min-w-full" src="/bg.webp" alt="idrewlong background one">
        {#if visible}
        <div transition:fade class="relative text-white"  >
                <h2 class="text-4xl md:text-7xl font-black mb-2 text-center">Welcome to 
                        <span class="font-light">id-dev</span>
                </h2>
                <p class="text-gray-100 text-lg text-center">Andrew Long | Web Developer | Data Analyst</p>
                <!-- <a href="/portfolio" class="flex justify-center items-center"><button class="px-2 py-1 bg-white text-black rounded-md">Check out my work!</button></a> -->
        </div>
        {/if}
</header>