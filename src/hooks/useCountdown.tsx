import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useCookies } from 'react-cookie'

interface CountdownProviderProps {
	children: ReactNode
	initialTime: number
}

const CountdownContext = createContext(0)

export function CountdownProvider({ children, initialTime }: CountdownProviderProps) {
	const [time, setTime] = useState(initialTime)
	const [_, setCookie] = useCookies(['@CountdownApp:countdown'])

	useEffect(() => {
		setTimeout(() => {
			if (time === 0) {
				setTime(60 * 60 * 336)
				setCookie('@CountdownApp:countdown', String(60 * 60 * 336))
			} else {
				setTime(time - 1)
				setCookie('@CountdownApp:countdown', String(time - 1))
			}
		}, 1000)
	}, [time])

	return (
		<CountdownContext.Provider value={time}>
			{children}
		</CountdownContext.Provider>
	)
}

export const useCountdown = () => useContext(CountdownContext)