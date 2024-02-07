<script setup lang="ts"></script>

<template>
	<div
		@click.self="$emit('close')"
		class="fixed inset-0 flex items-center justify-center"
	></div>
	<section id="explore" class="relative">
		<div
			@click="$emit('close')"
			class="text-[2.25rem] text-primary absolute top-5 right-5 p-2 cursor-pointer"
		>
			&times;
		</div>
		<h3>Explore</h3>
		<p>
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
		<button>Read More</button>
	</section>
</template>

<style scoped>
#explore {
	grid-column: 2 / span 3;
	grid-row: 3 / span 6;
	background: #fff;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 4.5rem 4.125rem;
	max-width: 690px;
}
h3 {
	font-family: Didot;
	font-size: 2.625rem;
	font-weight: 700;
	letter-spacing: 0px;
	text-align: left;
	color: var(--primary-color);
	padding-bottom: 1.625rem;
}
p {
	color: var(--text-color);
	font-family: Lato;
	font-size: 1.125rem;
	font-weight: 400;
	line-height: 1.375rem;
	letter-spacing: 0.3499999940395355px;
	text-align: left;
	padding-bottom: 1.875rem;
}
button {
	background: linear-gradient(90deg, #611818 0%, #a36754 100%);
	color: #fff;
	text-transform: uppercase;
	width: 235px;
	height: 55px;
}
@media screen and (min-width: 48rem) {
	h3 {
		font-size: 4.125rem;
		text-align: left;
	}
}
</style>
