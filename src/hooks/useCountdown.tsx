import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface CountdownProviderProps {
	children: ReactNode
}

const CountdownContext = createContext(0)

export function CountdownProvider({ children }: CountdownProviderProps) {
	const [time, setTime] = useState(() => {
		if (typeof window !== 'undefined') {
			const timeStoraged = localStorage.getItem('@CountdownApp:countdown')

			if (timeStoraged) {
				return Number(timeStoraged)
			}
			return 60 * 60 * 336 // 14 days in seconds
		}
	})

	useEffect(() => {
		setTimeout(() => {
			if (time === 0) {
				setTime(60 * 60 * 336)
				localStorage.setItem('@CountdownApp:countdown', String(60 * 60 * 336))
			} else {
				setTime(time - 1)
				localStorage.setItem('@CountdownApp:countdown', String(time - 1))
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