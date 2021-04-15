import styled from 'styled-components'

export const Container = styled.div`
	margin-top: 6rem;

	display: flex;
	align-items: center;

	div {
		p {
			margin-top: 1rem;
			font-size: 0.7rem;
			text-align: center;
			text-transform: uppercase;
			color: var(--blue-200);
			letter-spacing: 5px;
		}

		& + div {
			margin-left: 1.2rem;
		}
	}

	span {
		height: 4.5rem;
		width: 4.5rem;
		background: var(--blue-600);
		border-radius: 5px;

		display: flex;
		align-items: center;
		justify-content: center;

		font-size: 2rem;
		color: var(--red);
	}

	@media (min-width: 720px) {
		div p {
			font-size: 0.8rem;
		}

		span {
			height: 7rem;
			width: 7rem;

			font-size: 3.5rem;
		}
	}
`