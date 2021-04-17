import { useEffect, useMemo, useState } from 'react'
import { useCountdown } from '../../hooks/useCountdown'

import { Container } from './styles'

const DAY_IN_SECONDS = 86400
const HOUR_IN_SECONDS = 3600
const MINUTE_IN_SECONDS = 60

export function Countdown() {
	const time = useCountdown()

	const days = useMemo(() => {
		return String(Math.floor((time / DAY_IN_SECONDS) % 31)).padStart(2, '0')
	}, [time])

	const hours = useMemo(() => {
		return String(Math.floor((time / HOUR_IN_SECONDS) % 24)).padStart(2, '0')
	}, [time])

	const minutes = useMemo(() => {
		return String(Math.floor((time / MINUTE_IN_SECONDS) % 60)).padStart(2, '0')
	}, [time])

	const seconds = useMemo(() => {
		return String(time % 60).padStart(2, '0')
	}, [time])

	return (
		<Container>
			<div>
				<span>{days}</span>
				<p>Days</p>
			</div>
			<div>
				<span>{hours}</span>
				<p>Hours</p>
			</div>
			<div>
				<span>{minutes}</span>
				<p>Minutes</p>
			</div>
			<div>
				<span>{seconds}</span>
				<p>Seconds</p>
			</div>
		</Container>
	)
}