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
                <h2 class="text-5xl md:text-7xl font-black mb-2 text-center">Welcome to 
                        <span class="font-light">id-dev</span>
                </h2>
                <p class="text-gray-100 text-lg text-center">Self taught web developer with over 8 years of marketing & video experience!</p>
        </div>
        {/if}
</header>


    