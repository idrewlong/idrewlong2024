<script>


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
        <img class="hero_bg" src="/bg_3.webp" alt="">
  
    <div class="hero_about_container">
      <div class="gap-12 flex flex-col md:flex-row items-center"> 
        <div class="p-4 text-center md:text-left md:mt-0 md:w-1/2 flex flex-col items-center md:items-start justify-center"> 
        
          <h1 class="hero_about_h1">Hello, I am  <br /><span class="text-orange-400">{slides[currentIndex].text}</span></h1>
        
          <div class="about_btn_div"> 
            <a class="hero_about_btn" data-mdb-ripple="true" data-mdb-ripple-color="light" href="https://www.linkedin.com/in/idrewlong" role="button">LinkedIn</a>
            <a class="hero_about_btn2" data-mdb-ripple="true" data-mdb-ripple-color="light" href="/contact" role="button">Contact</a>
          </div>
        </div>

        <div class="hero_about_img_div">
          <img
            src="drew2.webp"
            class="hero_about_img"
            alt="Andrew Long"
          />
        </div>
      </div>
    </div>
</header>


<!-- <a class="inline-block px-7 py-3 mr-2 mb-4 md:mb-0 rounded bg-gradient-to-br from-orange-200 to-orange-400 hover:scale-105 duration-500 text-white font-medium leading-snug uppercase shadow-md focus:bg-orange-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition ease-in-out text-center justify-center" data-mdb-ripple="true" data-mdb-ripple-color="light" href="https://www.linkedin.com/in/idrewlong" role="button">LinkedIn</a>

<a class="inline-block px-7 py-3 bg-transparent text-orange-400 font-medium text-sm leading-snug uppercase rounded hover:text-orange-700 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-orange-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="/contact" role="button">Contact</a> -->