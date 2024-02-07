<script setup lang="ts"></script>

<template>
	<section v-show="false" id="explore">
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
	background: #fff;
	display: flex;
	flex-direction: column;
	justify-content: center;
}
h3 {
	font-family: Didot;
	font-size: 2.625rem;
	font-weight: 700;
	line-height: 3.375rem;
	letter-spacing: 0px;
	text-align: left;
	color: var(--primary-color);
}
p {
	color: var(--text-color);
	font-family: Lato;
	font-size: 1.125rem;
	font-weight: 400;
	line-height: 1.375rem;
	letter-spacing: 0.3499999940395355px;
	text-align: left;
}
button {
	background: linear-gradient(90deg, #611818 0%, #a36754 100%);
	color: #fff;
	text-transform: uppercase;
	width: 235px;
	height: 55px;
}
@media screen and (min-width: 48rem) {
	#explore {
		grid-column: 2 / span 2;
	}
	h3 {
		font-size: 4.125rem;
		text-align: left;
	}
}
</style>
