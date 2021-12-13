import React from "react"
import { SessionProvider } from "./SessionProvider"
import { isAccessTokenValid } from "../utils/auth"

const AuthProvider: React.FC = ({ children }) => {
	return (
		<SessionProvider isAuthenticated={isAccessTokenValid()}>
			{children}
		</SessionProvider>
	)
}

export default AuthProvider
