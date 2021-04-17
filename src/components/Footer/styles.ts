import styled from 'styled-components'

export const Container = styled.footer`
	height: 25vh;
	padding: 1rem 0;
	background: url('/images/pattern-hills.svg') no-repeat;
	background-size: cover;
	background-position: 82%;

	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;

	div {
		margin-bottom: 1.5rem;

		a {
			& + a {
				margin-left: 2rem;
			}

			svg {
				color: var(--blue-200);
				height: 2rem;
				width: 2rem;
				transition: color 0.2s;

				&:hover {
					color: var(--red);
				}
			}
		}
	}

	p {
		font-size: 0.8rem;
		color: var(--blue-200);

		a {
			margin-left: 0.3rem;
			text-decoration: none;
			color: var(--red);

			transition: filter 0.2s;

			&:hover {
				filter: brightness(0.9);
			}
		}
	}

	@media (min-width: 720px) {
		div a svg {
			height: 1.5rem;
			width: 1.5rem;
		}	
	}

	@media (min-width: 1440px) {
		background-size: contain;
		background-position: center;	
	}
`
