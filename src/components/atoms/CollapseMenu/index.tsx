import React from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"

import NavBarLinks from "../../molecules/NavBarLinks"

interface Props {
	isMenuOpen: boolean
}

const CollapseMenu: React.FC<Props> = ({ isMenuOpen }) => {
	const { open } = useSpring({ open: isMenuOpen ? 0 : 1 })

	if (isMenuOpen) {
		return (
			<CollapseWrapper
				style={{
					transform: open
						.interpolate({
							output: [0, -20, 0, -200],
							range: [0, 0.2, 0.3, 1],
						})
						.interpolate(
							openValue => `translate3d(0, ${openValue}px, 0`
						),
				}}
			>
				<NavBarLinks direction="column" />
			</CollapseWrapper>
		)
	}

	return null
}

const CollapseWrapper = styled(animated.div)`
	left: 0;
	position: fixed;
	right: 0;
	top: 3.5rem;
	z-index: 1;

	@media (min-width: 769px) {
		display: none;
	}
`

export default CollapseMenu
