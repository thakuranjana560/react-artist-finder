import React, { useContext } from "react"
import styled, { css, FlattenSimpleInterpolation } from "styled-components"
import { useHistory } from "react-router"

import { ROUTES } from "../../../constants"
import NavBarLink from "../../atoms/NavBarLink"
import NavBarButton from "../../atoms/NavBarButton"
import { clearLocalStorageAuth } from "../../../utils/auth"
import { SessionContext } from "../../SessionProvider"

interface Props {
	direction?: "column" | "row"
}

const NavBarLinks: React.FC<Props> = ({ direction = "row" }) => {
	const history = useHistory()
	const { setIsLoggedIn } = useContext(SessionContext)

	const handleLogOut = (): void => {
		clearLocalStorageAuth()
		setIsLoggedIn(false)
		history.push("/")
	}

	return (
		<NavLinks direction={direction}>
			<li>
				<NavBarLink route={ROUTES.SEARCH}>Search</NavBarLink>
			</li>
			<li>
				<NavBarLink route={ROUTES.FAVORITES}>Favorites</NavBarLink>
			</li>
			<li>
				<NavBarButton onClick={handleLogOut}>Log Out</NavBarButton>
			</li>
		</NavLinks>
	)
}

const NavLinks = styled.ul<Props>`
	background-color: ${(props): string => props.theme.primaryBackgroundColor};
	list-style-type: none;

	& a {
		border-bottom: 1px solid transparent;
		color: ${(props): string => props.theme.textColorOnBackgroundColor};
		cursor: pointer;
		font-weight: ${(props): number => props.theme.fontWeight.bold};
		text-decoration: none;
		text-transform: uppercase;
		transition: all 300ms linear 0s;

		&:hover {
			border-bottom: ${(props): string =>
				`3px solid ${props.theme.textColorOnBackgroundColor}`};
			color: ${(props): string => props.theme.textColorOnBackgroundColor};
		}
	}

	${(props): false | FlattenSimpleInterpolation =>
		props.direction === "row" &&
		css`
			align-items: center;
			display: flex;
			width: 100%;

			& li:last-child {
				margin-left: auto;
			}

			& a {
				margin: 0 1.5rem;

				@media (max-width: 768px) {
					display: none;
				}
			}

			& button {
				@media (max-width: 768px) {
					display: none;
				}
			}
		`}

	${(props): false | FlattenSimpleInterpolation =>
		props.direction === "column" &&
		css`
			height: 100vh;
			padding-left: 0;
			text-align: center;

			& a {
				line-height: 3;
			}

			& button {
				margin: 0.5rem auto;
			}
		`}
`

export default NavBarLinks
