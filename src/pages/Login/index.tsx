import React from "react"
import styled from "styled-components"

import { LOGIN_URL } from "../../constants"
import Panel from "../../components/atoms/Panel"
import Logo from "../../components/atoms/Logo"
import Button from "../../components/atoms/Button"
import Footer from "../../components/organisms/Footer"

const LoginPage: React.FC = () => {
	const redirectToLastFMLogin = (): void => {
		window.location.href = LOGIN_URL
	}

	return (
		<PageContainer>
			<Content>
				<Panel>
					<Logo width={"50%"} />
					<h1>Find Artists</h1>
					<ButtonContainer>
						<Button onClick={redirectToLastFMLogin}>Log In</Button>
					</ButtonContainer>
				</Panel>
			</Content>
			<Footer />
		</PageContainer>
	)
}

const PageContainer = styled.main`
	background-color: #fff;
	border: 5px solid #5ba4a4;
	box-shadow: 0 4px 6px 4px rgb(91 164 164 / 20%);
	display: flex;
	display: flex;
	flex-direction: column;
	height: 500px;
	margin-top: 200px;
	text-align: center;
	width: 500px;
	@media (max-width: 769px) {
		width: 300px;
		height: 300px;
	}
`

const Content = styled.div`
	align-items: center;
	display: flex;
	flex: 1;
	justify-content: center;

	div:first-child {
		padding: 2rem;
	}
`

const ButtonContainer = styled.div`
	display: flex;
`

export default LoginPage
