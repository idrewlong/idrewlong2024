<script>
import Foot from "$lib/foot.svelte";
	import Nav from "$lib/nav.svelte";
import "../app.css";
</script>

<main class="bg-gray-100">
<Nav/>
<slot />
<Foot/>
</main>