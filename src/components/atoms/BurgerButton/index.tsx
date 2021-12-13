import React from "react"
import styled from "styled-components"

import BaseButton from "../BaseButton"

interface Props {
	handleMenuToggle: () => void
	isMenuOpen: boolean
}

interface ButtonProps {
	isMenuOpen: boolean
}

const BurgerButton: React.FC<Props> = ({ handleMenuToggle, isMenuOpen }) => {
	return (
		<Button
			onClick={handleMenuToggle}
			ariaLabel="Toggle navigation"
			isMenuOpen={isMenuOpen}
		>
			<span className="animated-line first-line" />
			<span className="animated-line second-line" />
			<span className="animated-line third-line" />
		</Button>
	)
}

const Button = styled(BaseButton)<ButtonProps>`
	border-radius: 0;
	display: flex;
	flex-direction: column;
	height: 24px;
	justify-content: space-between;
	outline: none;
	padding: 0;
	width: 31px;

	@media screen and (min-width: 992px) {
		display: none;
	}

	.animated-line {
		display: block;
		background: ${(props): string =>
			props.theme.textColorOnBackgroundColor};
		height: 4px;
		width: 31px;
		transform-origin: 1px;
		transition: all 0.3s linear;
		border-radius: 2px;
	}

	.first-line {
		transform: ${({ isMenuOpen }): string =>
			isMenuOpen ? "rotate(45deg)" : "none"};
	}

	.second-line {
		opacity: ${({ isMenuOpen }): string => (isMenuOpen ? "0" : "1")};
	}

	.third-line {
		transform: ${({ isMenuOpen }): string =>
			isMenuOpen ? "rotate(-45deg)" : "none"};
	}
`

export default BurgerButton
