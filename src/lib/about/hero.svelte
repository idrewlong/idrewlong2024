<script>
	import { fade } from 'svelte/transition';
	let visible = false;

        onMount(() => {
        // Set visible to true after a short delay to trigger the fade-in transition
        setTimeout(() => {
            visible = true;
        }, 200);
    });

import { onMount, onDestroy } from 'svelte';
    
      let slides = [
        { text: "Andrew Long", duration: 3000 },
        { text: "a React Developer", duration: 3000 },    
        { text: "a Svelte Developer ", duration: 3000 },  
        { text: "a Golang Developer", duration: 3000 },
        { text: "a Python Developer", duration: 3000 }
      ];
    
      let currentIndex = 0;
      let intervalId;
      const intervalDuration = 2000; // Default interval duration
    
      function replaceWord() {
        currentIndex = (currentIndex + 1) % slides.length;
      }
    
      onMount(() => {
        // Start the interval immediately upon mounting
        intervalId = setInterval(replaceWord, intervalDuration);
      });
    
      onDestroy(() => {
        clearInterval(intervalId);
      });
</script>

<header class="hero_about">
        <img class="hero_bg" src="/bg_3.webp" alt="id-dev background">
    {#if visible}
    <div transition:fade class="hero_about_container">
      <div class="flex flex-col items-center"> 
        <div class="p-4 text-center md:mt-0 flex flex-col items-center justify-center"> 
        
          <h1 class="hero_about_h1">Hello, I am  <br /><span class="text-orange-400">{slides[currentIndex].text}</span></h1>
        
          <div class="about_btn_div"> 
            <a class="hero_about_btn" data-mdb-ripple="true" data-mdb-ripple-color="light" href="https://www.linkedin.com/in/idrewlong" role="button">LinkedIn</a>
            <a class="hero_about_btn2" data-mdb-ripple="true" data-mdb-ripple-color="light" href="/resume" role="button">Resume</a>
          </div>
        </div>
      </div>
    </div>
    {/if}
</header>


<!-- <a class="inline-block px-7 py-3 mr-2 mb-4 md:mb-0 rounded bg-gradient-to-br from-orange-200 to-orange-400 hover:scale-105 duration-500 text-white font-medium leading-snug uppercase shadow-md focus:bg-orange-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition ease-in-out text-center justify-center" data-mdb-ripple="true" data-mdb-ripple-color="light" href="https://www.linkedin.com/in/idrewlong" role="button">LinkedIn</a>

<a class="inline-block px-7 py-3 bg-transparent text-orange-400 font-medium text-sm leading-snug uppercase rounded hover:text-orange-700 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-orange-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="/contact" role="button">Contact</a> -->