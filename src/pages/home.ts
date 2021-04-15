import styled from 'styled-components'

export const Container = styled.div`
	height: 100vh;
`

export const CountdownContainer = styled.main`
	height: 75vh;
	max-width: 1440px;
	margin: 0 auto;
	background: url('/images/bg-stars.svg') no-repeat center;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h1 {
		font-size: 1.5rem;
		text-transform: uppercase;
		text-align: center;
		letter-spacing: 5px;
		max-width: 450px;
	}
`

export const Countdown = styled.div`
	margin-top: 5rem;

	display: flex;
	align-items: center;

	div {
		p {
			margin-top: 1rem;
			font-size: 0.7rem;
			text-align: center;
			text-transform: uppercase;
			color: var(--blue-200);
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
`