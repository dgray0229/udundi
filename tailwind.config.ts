import type { Config } from "tailwindcss";

export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			ditot: ["Ditot", "serif"],
			lato: ["Lato", "sans-serif"],
		},
		screens: {
			"sm": "40rem",
			// => @media (min-width: 640px) { ... }

			"md": "48rem",
			// => @media (min-width: 768px) { ... }

			"lg": "64rem",
			// => @media (min-width: 1024px) { ... }

			"xl": "80rem",
			// => @media (min-width: 1280px) { ... }

			"2xl": "100rem",
			// => @media (min-width: 1600px) { ... }
		},
		extend: {
			colors: {
				primary: "#611818",
				secondary: "#a36754",
				body: "#282828",
				transparent: "transparent",
			},
			fontSize: {
				"11xl": "11rem",
				"14xl": "14rem",
			},
			gridColumnStart: {
				"-1": "-1",
			},
			gridColumnEnd: {
				"-1": "-1",
			},
			backgroundImage: (theme) => ({
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-linear":
					"linear-gradient(var(--tw-gradient-angle), var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
			}),
		},
	},
	variants: {
		extend: {
			scale: ["active"],
		},
	},
	plugins: [
		require("tailwindcss-gradients"),
		function ({ addUtilities }) {
			const newUtilities = {
				".gradient-start": {
					"--tw-gradient-stops":
						"var(--tw-gradient-from), var(--tw-gradient-to) 37%, transparent 37%",
				},
				".gradient-md": {
					"--tw-gradient-stops":
						"var(--tw-gradient-from), var(--tw-gradient-to) 30%, transparent 30%",
				},
				".gradient-lg": {
					"--tw-gradient-stops":
						"var(--tw-gradient-from), var(--tw-gradient-to) 30%, transparent 30%",
				},
				".gradient-xl": {
					"--tw-gradient-stops":
						"var(--tw-gradient-from), var(--tw-gradient-to) 28%, transparent 28%",
				},
			};
			addUtilities(newUtilities);
		},
	],
} satisfies Config;
