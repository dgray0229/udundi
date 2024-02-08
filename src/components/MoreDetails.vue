<script setup lang="ts">
import { ref } from "vue";
import Explore from "./Explore.vue";

const showExplore = ref(false);
const onExplore = () => (showExplore.value = true);
const offExplore = () => (showExplore.value = false);
</script>

<template>
	<div class="relative col-start-2 col-span-6 row-start-6 row-span-2 flex flex-col justify-start rounded transition-colors duration-300 md:row-start-10 md:row-span-2 xl:col-start-2 xl:col-span-6">
		<Transition name="fade">
			<section
				v-show="!showExplore"
				id="more-details"
				class="absolute col-start-2 col-span-6 row-start-6 row-span-2 flex flex-col justify-start rounded transition-colors duration-300 md:row-start-10 md:row-span-2 xl:col-start-2 xl:col-span-6"
			>
				<h2
					class="font-ditot text-7xl font-bold leading-tight tracking-tight text-left text-white m-0 md:text-11xl md:leading-none xl:text-14xl"
				>
					Explore
				</h2>
				<div
					class="flex justify-start items-center cursor-pointer"
					@click="onExplore"
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
		</Transition>
		<Transition name="slide-fade">
			<Explore v-show="showExplore" @close="offExplore" />
		</Transition>
	</div>
</template>
<style scoped>
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
	opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 1s;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
	border-radius: 50%;
	transform: scale(0);
	transform-origin: bottom left;
}
.slide-fade-enter-to,
.slide-fade-leave-from {
	border-radius: 0;
	transform: scale(1);
	transform-origin: bottom left;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
	transition: transform 0.5s, border-radius 0.5s;
}
</style>
