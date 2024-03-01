<script>
	import powerpoint from '/src/img/pp.webp'
	import excel from '/src/img/excel.webp';
	import word from '/src/img/word.webp';
	import vscode from '/src/img/vs.webp';
        import aftereffects from '/src/img/aftereffects.webp';
        import photoshop from '/src/img/photoshop.webp';
	import lightroom from '/src/img/lightroom.webp';
	import premiere from '/src/img/premiere.webp';
        import figma from '/src/img/figma.webp';
	import xd from '/src/img/xd.webp';
	import acrobat from '/src/img/acrobat.webp';
        const links = [
                {
			src: vscode,
			title: 'VS Code',
			style: 'shadow-blue-500',
		},
		{
			src: word,
			title: 'Word',
			style: 'shadow-blue-500',
		},
		{
			src: excel,
			title: 'Excel',
			style: 'shadow-green-500',
		},
		{
			src: powerpoint,
			title: 'Power Point',
			style: 'shadow-orange-500',
		},
		{
			src: photoshop,
			title: 'Photoshop',
			style: 'shadow-blue-500',
		},
                {
			src: lightroom,
			title: 'Lightroom',
			style: 'shadow-blue-500',
		},
                {
			src: premiere,
			title: 'Premiere',
			style: 'shadow-purple-800',
		},

		{
			src: aftereffects,
			title: 'After Effects',
			style: 'shadow-purple-800',
		},

		{
			src: xd,
			title: 'XD',
			style: 'shadow-pink-400',
		},
		{
			src: acrobat,
			title: 'Acrobat',
			style: 'shadow-red-600',
		},
		{
			src: figma,
			title: 'Figma',
			style: 'shadow-gray-500',
		},
        ]
</script>

<div class="justify-center text-center"> 
        <h1 class="text-3xl lg:text-4xl font-bold text-center text-gray-800 capitalize">Software</h1>
</div>

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
</section>

    