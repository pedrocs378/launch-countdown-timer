import styled from 'styled-components'

export const Container = styled.div`
	margin-top: 6rem;

	display: flex;
	align-items: center;

	div {
		p {
			margin-top: 1rem;
			font-size: 0.6rem;
			text-align: center;
			text-transform: uppercase;
			color: var(--blue-200);
			letter-spacing: 3px;
		}

		& + div {
			margin-left: 1.2rem;
		}
	}

	span {
		height: 4.7rem;
		width: 4.7rem;
		background: var(--blue-600);
		border-radius: 7px;
		box-shadow: 0 8px 3px 0 #14151c;

		display: flex;
		align-items: center;
		justify-content: center;

		font-size: 2rem;
		color: var(--red);
	}

	@media (min-width: 720px) {
		div p {
			font-size: 0.8rem;
			letter-spacing: 5px;
		}

		span {
			height: 7rem;
			width: 7rem;

			font-size: 3.5rem;
		}
	}
`