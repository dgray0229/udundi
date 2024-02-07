<script setup lang="ts">
import Explore from "./components/Explore.vue";
import MoreDetails from "./components/MoreDetails.vue";
import Socials from "./components/Socials.vue";
</script>
<template>
<main
    id="content"
    class="from-primary gradient-start bg-right-top bg-no-repeat bg-cover w-screen h-screen grid grid-cols-4 min-h-screen shadow-inner bg-red-500 bg-opacity-50 md:grid-cols-8 md:gradient-md lg:grid-cols-16 lg:gradient-lg 2xl:grid-cols-16 2xl:gradient-xl"
>
		<Explore />
		<MoreDetails />
		<Socials />
	</main>
</template>
<style scoped>
#content {
	background-image: url("./assets/bg.png");
	box-shadow: inset 0 0 0 100vmax rgba(97, 24, 24, 0.5);
}

@media screen and (min-width: 768px) {
	#content {
		box-shadow: none;
		background-image: linear-gradient(
				to right,
				var(--primary-color) 37%,
				transparent 37%
			),
			url("./assets/bg.png");
	}
}
@media screen and (min-width: 1024px) {
	#content {
		background-image: linear-gradient(
				to right,
				var(--primary-color) 30%,
				transparent 30%
			),
			url("./assets/bg.png");
	}
}
@media screen and (min-width: 1024px) {
	#content {
		background-image: linear-gradient(
				to right,
				var(--primary-color) 30%,
				transparent 30%
			),
			url("./assets/bg.png");
	}
}
@media screen and (min-width: 1600px) {
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
