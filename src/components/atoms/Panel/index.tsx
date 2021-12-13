import React from "react"
import styled from "styled-components"

const Panel: React.FC = ({ children }) => {
	return <Container>{children}</Container>
}

const Container = styled.div`
	// align-items: center;
	// background-color: ${(props): string =>
		props.theme.primaryBackgroundColor};
	// border-radius: ${(props): string => props.theme.panelBorderRadius};
	// box-shadow: ${(props): string => props.theme.panelBoxShadow};
	// display: flex;
	// flex-direction: column;
	// padding: 1rem;
`

export default Panel
