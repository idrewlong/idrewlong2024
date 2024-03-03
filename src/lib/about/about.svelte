<script context="module">
        import Bio from "./bio.svelte";
        import Lang from "./lang.svelte";
        import Software from "./software.svelte";
        import Tabs from "./tabs.svelte";
      </script>
      
      <script>
        import { createEventDispatcher } from "svelte";
      
        let items = ['Bio', 'Languages', 'Software'];
        let activeItem = 'Bio';
        const dispatch = createEventDispatcher();
      
        const tabChange = (e) => {
          activeItem = e.detail;
        };
      </script>
      
      <section class="about_about">
        <Tabs {activeItem} {items} on:tabChange={tabChange} />
      
        {#if activeItem === 'Bio' }
          <Bio/>
        {:else if activeItem === 'Languages' }
          <Lang/>
        {:else if activeItem === 'Software' }
          <Software/>
        {/if}
      </section>
      
