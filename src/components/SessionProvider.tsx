import React, { useState, createContext, useMemo } from "react"

interface Props {
	isAuthenticated: boolean
}

interface ISessionContext {
	isLoggedIn: boolean
	setIsLoggedIn: (isLoggedIn: boolean) => void
}

const SessionContext = createContext<ISessionContext>({
	isLoggedIn: false,
	setIsLoggedIn: () => {},
})

const SessionProvider: React.FC<Props> = ({ children, isAuthenticated }) => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(isAuthenticated)

	const value = useMemo(() => ({ isLoggedIn, setIsLoggedIn }), [isLoggedIn])

	return (
		<SessionContext.Provider value={value}>
			{children}
		</SessionContext.Provider>
	)
}

export { SessionContext, SessionProvider }
