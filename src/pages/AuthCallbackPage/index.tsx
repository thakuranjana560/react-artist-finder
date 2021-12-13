import React, { useEffect, useContext } from "react"
import styled from "styled-components"
import { useHistory } from "react-router"

import { ACCESS_TOKEN_KEY, ACCESS_TOKEN_EXPIRATION } from "../../constants"
import { SessionContext } from "../../components/SessionProvider"
import Panel from "../../components/atoms/Panel"
import Logo from "../../components/atoms/Logo"
import Footer from "../../components/organisms/Footer"

const AuthCallbackPage: React.FC = () => {
	const history = useHistory()
	const { setIsLoggedIn } = useContext(SessionContext)

	useEffect(() => {
		const now = new Date()
		const expirationDate = new Date(now.getTime() + 3600000)
		const urlParams = new URLSearchParams(window.location.search)
		const token = urlParams.get("token")

		if (token) {
			localStorage.setItem(ACCESS_TOKEN_KEY, token)
			localStorage.setItem(
				ACCESS_TOKEN_EXPIRATION,
				expirationDate.toISOString()
			)
			setIsLoggedIn(true)
			history.push("/search")
		} else {
			history.push("/")
		}
	}, [history, setIsLoggedIn])

	return (
		<PageContainer>
			<Content>
				<Panel>
					<Logo width={"50%"} />
					<LoadingText>Loading...</LoadingText>
				</Panel>
			</Content>
			<Footer />
		</PageContainer>
	)
}

const PageContainer = styled.main`
	align-items: center;
	background-color: ${(props): string =>
		props.theme.secondaryBackgroundColor};
	display: flex;
	flex-direction: column;
`

const Content = styled.div`
	align-items: center;
	display: flex;
	flex: 1;
`
const LoadingText = styled.h1`
	margin-top: 1rem;
`

export default AuthCallbackPage
