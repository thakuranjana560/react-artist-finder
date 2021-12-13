import React from "react"
import styled from "styled-components"

import LastFMLogo from "../../atoms/LastFMLogo"

const Footer: React.FC = () => {
	return (
		<Container>
			<p>Powered by</p>
			<a href="https://www.last.fm/">
				<LastFMLogo width="100%" />
			</a>
		</Container>
	)
}

const Container = styled.footer`
	align-items: center;
	display: flex;
	justify-content: center;
	padding-bottom: 0.5rem;

	p {
		margin-right: 0.5rem;
	}

	a {
		display: flex;
		width: 20%;
	}
`

export default Footer
