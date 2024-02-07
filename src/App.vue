<script setup lang="ts">
import Explore from "./components/Explore.vue";
import MoreDetails from "./components/MoreDetails.vue";
import Socials from "./components/Socials.vue";
</script>

<template>
	<main id="content">
		<Explore />
		<MoreDetails />
		<Socials />
	</main>
</template>

<style scoped>
#content {
	background-image: url("./assets/bg.png");
	background-position: right top; /* Ensures the image aligns to the right */
	background-repeat: no-repeat;
	background-size: 100% 100%;
	box-shadow: inset 0 0 0 100vmax rgba(97, 24, 24, 0.5);
	display: grid;
	grid-template-columns: auto repeat(4, minmax(0.5rem, 1fr));
	min-height: 100vh;
	width: 100vw;
	height: 100vh;
}

@media screen and (min-width: 48rem) {
	#content {
		box-shadow: none;
		background-image: linear-gradient(
				to right,
				var(--primary-color) 37%,
				transparent 37%
			),
			url("./assets/bg.png");
		grid-template-columns: repeat(8, minmax(0.125rem, 0.25fr));
		width: 100vw;
		height: 100vh;
	}
}
@media screen and (min-width: 64rem) {
	#content {
		background-image: linear-gradient(
				to right,
				var(--primary-color) 30%,
				transparent 30%
			),
			url("./assets/bg.png");
		grid-template-columns: repeat(16, minmax(0.5rem, 1fr));
	}
}
@media screen and (min-width: 90rem) {
	#content {
		background-image: linear-gradient(
				to right,
				var(--primary-color) 30%,
				transparent 30%
			),
			url("./assets/bg.png");
	}
}
@media screen and (min-width: 100rem) {
	#content {
		background-image: linear-gradient(
				to right,
				var(--primary-color) 28%,
				transparent 28%
			),
			url("./assets/bg.png");
	}
}
</style>
