
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
        <img class="absolute left-0 top-0 min-h-full min-w-full" src="/bg_2.webp" alt="idrewlong background one">
        <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 227" fill="none" class="absolute left-0 top-0 min-h-full min-w-full">
                <rect width="100%" height="100%" rx="5" fill="url(#paint0_linear_1_2)"></rect>
                <defs>
                    <linearGradient id="paint0_linear_1_2" x1="7.71428" y1="9.08" x2="618.82" y2="137.312" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FF5823"></stop>
                        <stop offset="1" stop-color="#FBB131"></stop>
                    </linearGradient>
                </defs>
            </svg> -->
        {#if visible}
        <div transition:fade class="relative text-white ">
                <h2 class="text-4xl md:text-7xl font-black mb-2 text-center uppercase">Contact
                        <span class="font-light">id-dev</span>
                </h2>
                <p class="text-gray-100 text-lg text-center">Interested in working together? Submit a form and let's get to coding!</p>
        </div>
        {/if}
</header>