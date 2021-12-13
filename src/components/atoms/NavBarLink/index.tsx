import React from "react"
import { NavLink } from "react-router-dom"

interface Props {
	route: string
}

const NavBarLink: React.FC<Props> = ({ children, route }) => {
	return (
		<NavLink
			activeStyle={{
				borderBottom: "3px solid #5ba4a4",
			}}
			to={route}
			exact
		>
			{children}
		</NavLink>
	)
}

export default NavBarLink
