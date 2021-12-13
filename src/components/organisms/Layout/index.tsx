import React, { Fragment } from "react"
import styled from "styled-components"
import NavigationBar from "../NavigationBar"

const Layout: React.FC = ({ children }) => {
	return (
		<Fragment>
			<NavigationBar />
			<PageContainer>
				<div>{children}</div>
			</PageContainer>
		</Fragment>
	)
}

const PageContainer = styled.main`
	background-color: ${(props): string => props.theme.primaryBackgroundColor};

	> div {
		align-items: center;
		display: flex;
		flex-direction: column;
		margin-bottom: 2rem;
	}
`

export default Layout
