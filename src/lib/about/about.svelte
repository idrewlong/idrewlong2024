<script>
        import Bio from "./bio.svelte";
        import Lang from "./lang.svelte";
        import Software from "./software.svelte";
        import Tabs from "./tabs.svelte";
        let items = ['Bio', 'Languages', 'Software']
        let activeItem = 'Bio'

        const tabChange = (e) => {
                activeItem = e.detail;
        }
</script>

<section class="about_about">
        <Tabs {activeItem} {items} on:tabChange={tabChange}/>
        {#if activeItem === 'Bio' }
       <Bio/>
        {/if}
        {#if activeItem === 'Languages' }
        <Lang/>
        {/if}
        {#if activeItem === 'Software' }
        <Software/>
        {/if}
</section>

