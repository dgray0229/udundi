<template>
	<section
		id="explore"
		class="fixed bottom-0 md:absolute md:bottom-[-7rem] left-0 z-1 bg-white flex flex-col justify-center p-12 max-w-[690px] max-h-[580px]"
	>
		<div
			@click="$emit('close')"
			class="z-5 text-[2.25rem] text-primary absolute top-5 right-5 p-2 cursor-pointer"
		>
			&times;
		</div>
		<h3
			class="font-didot text-[2.625rem] font-bold text-left text-primary pb-[1.625rem] md:text-[4.125rem]"
		>
			Explore
		</h3>
		<p
			class="overflow-auto text-body font-lato text-[1.125rem] font-normal leading-[1.375rem] tracking-[0.3499999940395355px] text-left mb-[1.875rem]"
		>
			Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
			doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
			inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
			Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
			fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
			sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
			amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
			incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
			minima veniam, quis nostrum exercitationem ullam corporis suscipit
			laboriosam, nisi ut aliquid ex ea commodi consequatur?
		</p>
		<button
			class="bg-gradient-to-r from-primary to-secondary text-white uppercase w-[235px] h-[55px] p-2"
		>
			Read More
		</button>
	</section>
</template>
<style scoped></style>
