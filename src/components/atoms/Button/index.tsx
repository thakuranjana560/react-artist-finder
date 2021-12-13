import React from "react"
import styled from "styled-components"

import BaseButton from "../BaseButton"

interface Props {
	type?: "button" | "submit" | "reset"
	onClick?: () => void
	disabled?: boolean
	variant?: "primary" | "secondary"
}

interface ButtonProps {
	variant?: "primary" | "secondary"
}

const Button: React.FC<Props> = ({
	children,
	type = "button",
	onClick = (): void => {},
	disabled = false,
	variant = "primary",
}) => {
	return (
		<StyledButton
			type={type}
			variant={variant}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</StyledButton>
	)
}

export const StyledButton = styled(BaseButton)<ButtonProps>`
	background-color: ${(props): string =>
		props.variant === "primary"
			? props.theme.secondaryColor
			: "transparent"};
	border: ${(props): string =>
		props.variant === "primary" ? "none" : "2px solid #5ba4a4"};
	border-radius: ${(props): string => props.theme.buttonBorderRadius};
	color: ${(props): string =>
		props.variant === "primary"
			? props.theme.textColorOnSecondaryColor
			: props.theme.textColorOnBackgroundColor};
	font-weight: ${(props): number => props.theme.fontWeight.bold};
	padding: 0.75rem;
	text-transform: uppercase;
	width: 100%;

	&:hover:not(:disabled) {
		opacity: 0.8;
	}
`

export default Button
