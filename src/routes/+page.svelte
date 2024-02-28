<script>
	import Lang_2 from './../lib/home/lang_2.svelte';
	
import About from "$lib/home/about.svelte";
	import Brands from "$lib/home/brands.svelte";
import Cta from "$lib/home/cta.svelte";
import Hero from "$lib/home/hero.svelte";
import Portfolio from "$lib/home/portfolio.svelte";
import Tabs from "$lib/home/tabs.svelte";


</script>

<main class="page_main">
<Hero/>
<Tabs/>
<Lang_2/>
<About/>
<!-- <Lang/> -->
<Portfolio/>
<Brands/>
<Cta/>

</main>