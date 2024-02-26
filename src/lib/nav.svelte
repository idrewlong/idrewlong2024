<script>
        let showMenu = false;
      
        function toggleNavbar() {
          showMenu = !showMenu;
        }
      
        function closeNavbar() {
          showMenu = false;
        }
      </script>
      
      <div class=" bg-gray-100 py-4 px-2">
       <div>
          <nav
            class=" p-4 px-6 mx-auto shadow bg-white max-w-7xl rounded-3xl md:flex md:justify-between md:items-center"
          >
            <div class="flex items-center justify-between">
              <a href="/" class="flex items-center">
                <img src="/IDLOGO.webp" class="h-14 w-14 hover:scale-105 duration-500" alt="iDrew Logo" />
                <span class="text-2xl font-semibold whitespace-nowrap text-white"></span>
              </a>
      
              <!-- Mobile menu button -->
              <div class="flex md:hidden">
                <button
                  type="button"
                  class="text-white hover:text-gray focus:outline-none focus:text-gray-400"
                  aria-label="Toggle Navigation"
                  on:click={toggleNavbar}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </button>
              </div>
            </div>
      
            <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
            <div
              class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-6 md:mt-0 {showMenu
                    ? 'flex'
                    : 'hidden'}"
            >
              <a class="text-gray-500 duration-500 hover:text-orange-400 hover:underline ease-in-out" href="/about" on:click={closeNavbar}>About</a>
              <!-- <a class="text-grey-800 duration-500 hover:text-orange-400 hover:underline ease-in-out" href="/blog" on:click={closeNavbar}>Blog</a> -->
              <a class="text-gray-500 duration-500 hover:text-orange-400 hover:underline ease-in-out" href="/portfolio" on:click={closeNavbar}>Portfolio</a>
              <a class="text-gray-500 duration-500 hover:text-orange-400 hover:underline ease-in-out" href="/media" on:click={closeNavbar}>Media</a>
              <a class="text-gray-500 duration-500 hover:text-orange-400 hover:underline ease-in-out" href="/contact" on:click={closeNavbar}>Contact</a>

              <a href="https://github.com/idrewlong" class="text-gray-400 hover:text-orange-400 duration-200">
                <span class="sr-only">GitHub</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/idrewlong/" class="text-gray-400 hover:text-orange-400 ">
                <span class="sr-only">LinkedIn</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            </div>
          </nav>
        </div>
      </div>