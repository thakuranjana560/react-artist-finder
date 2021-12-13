import React, { useState } from "react"
import { ThemeProvider } from "styled-components"
import { BrowserRouter as Router } from "react-router-dom"

import { GlobalStyle, lightTheme } from "./styles"
import Routes from "./components/Routes"
import AuthProvider from "./components/AuthProvider"
import { FavoritesProvider } from "./components/FavoritesProvider"

const App: React.FC = () => {
	const [theme] = useState(lightTheme)

	return (
		<ThemeProvider theme={theme}>
			<Router>
				<AuthProvider>
					<FavoritesProvider>
						<Routes />
					</FavoritesProvider>
				</AuthProvider>
			</Router>
			<GlobalStyle />
		</ThemeProvider>
	)
}

export default App
