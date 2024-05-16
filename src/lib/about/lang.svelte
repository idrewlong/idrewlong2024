<!-- <script>
	import html from '/src/img/html.webp';
	import css from '/src/img/css.webp';
	import js from '/src/img/js.webp';
        import ts from '/src/img/typescript.webp';
        import react from '/src/img/react.webp';
	import next from '/src/img/next.webp';
	import svelte from '/src/img/svelte.webp';
        import python from '/src/img/python.webp';
	import go from '/src/img/go.webp';
	
        const links = [
                {
			src: html,
			title: 'HTML',
			style: 'shadow-orange-500',
		},
		{
			src: css,
			title: 'CSS',
			style: 'shadow-blue-500',
		},
		{
			src: js,
			title: 'Javascript',
			style: 'shadow-yellow-500',
		},
		{
			src: react,
			title: 'React.js',
			style: 'shadow-blue-300',
		},
                {
			src: next,
			title: 'Next.js',
			style: 'shadow-gray-500',
		},
                {
			src: svelte,
			title: 'Svelte.js',
			style: 'shadow-orange-600',
		},

		{
			src: ts,
			title: 'Type Script',
			style: 'shadow-blue-500',
		},

		{
			src: python,
			title: 'Python',
			style: 'shadow-yellow-400',
		},
		{
			src: go,
			title: 'Go',
			style: 'shadow-blue-400',
		},
        ]
</script>

<section class="soft_prog">
        <div class="grid grid-cols-1 justify-center text-black">
                <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                    {#each links as { src, title, style }}
                    <div class="shadow-md text-center transform hover:scale-105 duration-300 rounded-lg overflow-hidden  {style}">
                        <img src={src} alt={title} class="w-20 my-2 mx-auto" />
                        <p class="text-center mt-4">{title}</p>
                    </div>
                    {/each}
                </div>
            </div>
</section> -->

<section class="max-w-7xl mx-auto rounded-3xl shadow-lg p-5 grid grid-cols-1 gap-5">
	<div>
		<ul class="flex flex-col space-y-8">
			<li>
				<b>Languages:</b> HTML, CSS, JavaScript, Typescript, SQL, MySQL, Go, Python, C#/ .NET
			</li>
			<li>
				<b>Frameworks:</b> Next.js, React.js, Svelte.js, SvelteKit, Bootstrap, Tailwind CSS
			</li>
			<li>
				<b>Cloud and Tools:</b> Firebase, MongoDB, GraphQL, Prisma, Cloudflare, Vercel, Wordpress, Google Suite, Git
			</li>
			<li>
				<b>Other Software:</b> Figma, Canva, Adobe Creative Suite, Microsoft Office, Microsoft Dyanmics, Power Apps, Power BI, Tableau, Jira, Salesforce
			</li>
		</ul>
	</div>
</section>
