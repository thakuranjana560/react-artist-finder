import { createGlobalStyle } from "styled-components"
import { primaryFont, typeScale, fontWeight } from "./typography"
import { orange } from "./colors"
import { normalize } from "polished"

export const GlobalStyle = createGlobalStyle`
	${normalize()}
	html {
		box-sizing: border-box;
		font-size: 16px;
	}
	*, *:before, *:after {
		box-sizing: inherit;
		font-weight: ${fontWeight.regular};
	}
	body {
		margin: 0;
		font-family: ${primaryFont};
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		background-color: #effafa;
	}
	main {
		width: 100%;
		height: 100vh;
		margin: 0 auto;
	}
	h1 {
		font-size: ${typeScale.h1};
	}
	h2 {
		font-size: ${typeScale.h2};
	}
	h3 {
		font-size: ${typeScale.h3};
	}
	h4 {
		font-size: ${typeScale.h4};
	}
	h5 {
		font-size: ${typeScale.h5};
	}
	p {
		font-size: ${typeScale.p};
	}
	a {
		color: ${orange[500]}
	}
	ul {
		list-style-type: none;
	}
`
