import React from "react"
import styled from "styled-components"

import BaseButton from "../../atoms/BaseButton"

interface Props {
	type?: "button" | "submit" | "reset"
	onClick?: () => void
	disabled?: boolean
}

const NavBarButton: React.FC<Props> = ({
	children,
	type = "button",
	onClick = (): void => {},
	disabled = false,
}) => {
	return (
		<StyledButton type={type} onClick={onClick} disabled={disabled}>
			{children}
		</StyledButton>
	)
}

const StyledButton = styled(BaseButton)`
	color: ${(props): string => props.theme.textColorOnBackgroundColor};
	font-weight: ${(props): number => props.theme.fontWeight.bold};
	text-transform: uppercase;
	transition: all 300ms linear 0s;

	&:hover {
		border-bottom: ${(props): string =>
			`3px solid ${props.theme.textColorOnBackgroundColor}`};
		color: ${(props): string => props.theme.textColorOnBackgroundColor};
	}
`

export default NavBarButton
