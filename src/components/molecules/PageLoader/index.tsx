import React, { useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import Loader from "react-loader-spinner"

const PageLoader: React.FC = () => {
	const themeContext = useContext(ThemeContext)

	return (
		<LoaderContainer>
			<Loader
				type="Circles"
				color={themeContext.textColorOnBackgroundColor}
				height={100}
				width={100}
			/>
		</LoaderContainer>
	)
}

const LoaderContainer = styled.div`
	align-items: center;
	display: flex;
	height: 80vh;
	justify-content: center;
	padding: 2rem;
	width: 100%;
`

export default PageLoader
