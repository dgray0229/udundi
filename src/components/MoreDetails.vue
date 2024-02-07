<script setup lang="ts"></script>

<template>
	<section id="more-details">
		<h2>Explore</h2>
		<div>
			<img src="../assets/Plus.svg" />&nbsp;<strong>More Details</strong>
		</div>
	</section>
</template>

<style scoped>
h2 {
	font-family: Didot;
	font-size: 7rem;
	font-weight: 700;
	line-height: 1.25;
	letter-spacing: 0;
	text-align: left;
	margin: 0;
}
div {
	display: flex;
	justify-content: flex-start;
	align-items: center;
}
img {
	width: 100%;
	max-width: 2.6875rem;
	height: auto;
	padding-right: 1rem;
}

strong {
	font-family: Lato;
	font-size: 1.5625rem;
	font-weight: 400;
	letter-spacing: 0.625px;
	text-align: center;
}
#more-details {
	grid-column: 2 / span 6;
	grid-row: 6 / span 2;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	border-radius: 1rem;
	transition: background 300ms;
}

@media screen and (min-width: 48rem) {
	h2 {
		font-size: 11rem;
		line-height: 1;
		text-align: left;
	}

	strong {
		font-size: 1.5rem;
		line-height: 1.875rem;
		letter-spacing: 0.625px;
	}
	#more-details {
		grid-row: 10 / span 2;
	}
}
@media screen and (min-width: 90rem) {
	h2 {
		font-size: 14rem;
	}
	#more-details {
		grid-column: 3 / span 6;
	}
}
</style>
