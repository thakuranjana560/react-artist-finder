import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { createMemoryHistory } from "history"
import { ThemeProvider } from "styled-components"

import { lightTheme as theme } from "../../../styles/themes"
import { Router } from "react-router"
import SearchPage from "../../Search"

describe("[pages.SearchPage]", () => {
	it("displays user input", () => {
		const history = createMemoryHistory()
		history.push("/search")

		render(
			<ThemeProvider theme={theme}>
				<Router history={history}>
					<SearchPage />
				</Router>
			</ThemeProvider>
		)

		userEvent.type(screen.getByRole("textbox"), "Cher")
		expect(screen.getByRole("textbox")).toHaveValue("Cher")
	})
})
