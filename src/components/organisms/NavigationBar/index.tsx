import React, { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import NavBarLinks from "../../molecules/NavBarLinks"
import Logo from "../../atoms/Logo"
import BurgerButton from "../../atoms/BurgerButton"
import CollapseMenu from "../../atoms/CollapseMenu"

const NavigationBar: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const handleMenuToggle = (): void => {
		setIsMenuOpen(currentState => !currentState)
	}

	return (
		<NavBar>
			<Nav>
				<LogoLink to="/">
					<Logo width="100%" />
				</LogoLink>
				<StyledNavBarLinks />
				<BurgerMenuWrapper>
					<BurgerButton
						handleMenuToggle={handleMenuToggle}
						isMenuOpen={isMenuOpen}
					/>
				</BurgerMenuWrapper>
			</Nav>
			<CollapseMenu isMenuOpen={isMenuOpen} />
		</NavBar>
	)
}

const NavBar = styled.header`
	background-color: ${(props): string => props.theme.primaryBackgroundColor};
	font-size: ${(props): string => props.theme.typeScale.h4};
`
const Nav = styled.nav`
	display: flex;
	height: 5rem;
	justify-content: space-between;
	max-width: 120rem;
	padding: 0 2rem;
`

const StyledNavBarLinks = styled(NavBarLinks)``

const LogoLink = styled(Link)`
	display: flex;
	margin-top: 0.5rem;
	width: 10%;

	@media (max-width: 768px) {
		margin-top: 0;
		width: 15%;
	}
`

const BurgerMenuWrapper = styled.div`
	margin: 1.5rem 0;

	@media (min-width: 769px) {
		display: none;
	}
`

export default NavigationBar
