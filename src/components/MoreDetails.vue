<script setup lang="ts">
import { ref } from "vue";
import Explore from "./Explore.vue";

const showExplore = ref(false);
const toggleExplore = () => (showExplore.value = !showExplore.value);
</script>

<template>
	<section
		v-if="!showExplore"
		id="more-details"
		class="col-start-2 col-span-6 row-start-6 row-span-2 flex flex-col justify-start rounded transition-colors duration-300 md:row-start-10 md:row-span-2 xl:col-start-2 xl:col-span-6"
	>
		<h2
			class="font-ditot text-7xl font-bold leading-tight tracking-tight text-left text-white m-0 md:text-11xl md:leading-none xl:text-14xl"
		>
			Explore
		</h2>
		<div
			class="flex justify-start items-center cursor-pointer"
			@click="toggleExplore"
		>
			<img
				src="../assets/Plus.svg"
				class="w-full max-w-[2.6875rem] h-auto pr-4"
			/>&nbsp;<strong
				class="font-lato text-[1.5625rem] font-medium tracking-[0.625px] text-center text-white md:text-[1.5rem] md:leading-[1.875rem]"
				>More Details</strong
			>
		</div>
	</section>
	<Explore v-if="showExplore" @close="showExplore = false" />
</template>
