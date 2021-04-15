import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

	:root {
		--white: #fff;

		--red: hsl(345, 95%, 68%);

		--blue-200: hsl(237, 18%, 59%);
		--blue-600: hsl(236, 21%, 26%);
		--blue-800: hsl(235, 16%, 14%);
		--blue-950: hsl(234, 17%, 12%);
	}

	* {
		padding: 0;
		margin: 0;
		border: 0;
		box-sizing: border-box;
	}

	@media (max-width: 1080px) {
		html {
			font-size: 93.75%;
		}
	}

	@media (max-width: 720px) {
		html {
			font-size: 87.5%;
		}
	}

	body {
		background: var(--blue-950);
		color: var(--white);
	}

	body, input, textarea, select, button {
		font: 700 1rem "Red Hat Text", sans-serif;
	}
`