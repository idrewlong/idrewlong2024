<script>
        import { createEventDispatcher } from "svelte";
        const dispatch = createEventDispatcher();
        
        export let items;
        export let activeItem;
      </script>
      
      <div class="tabs_about">
        <ul class="flex flex-row justify-between p-2 space-x-12">
          {#each items as item}
          <button class="tab_item" on:click={() => dispatch('tabChange', item)}>
            <div class:active={item === activeItem}>{item}</div>
          </button>
          {/each}
        </ul>
      </div>
      
      <style>
        .tabs_about {
          @apply flex flex-col mb-8 bg-slate-50 rounded-xl;
        }
        .tab_item {
          @apply cursor-pointer text-center w-48 rounded-sm hover:shadow-md transition duration-300;
        }
        .active {
          @apply w-auto h-6 text-orange-400 shadow-md rounded-lg;
        }
      </style>
      
