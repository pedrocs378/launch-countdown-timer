import styled from 'styled-components'

export const Container = styled.footer`
	height: 25vh;
	background: url('/images/pattern-hills.svg') no-repeat;
	background-size: cover;
	background-position: 82%;
	display: flex;
	justify-content: center;

	a {
		align-self: flex-end;
		margin-bottom: 2.5rem;

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
`
