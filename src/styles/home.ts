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
		letter-spacing: 8px;
		max-width: 340px;
	}

	@media (min-width: 720px) {
		h1 {
			font-size: 1.3rem;
			max-width: 100%;
		}
	}
`