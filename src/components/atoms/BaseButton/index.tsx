import React from "react"
import styled from "styled-components"

interface Props {
	ariaLabel?: string
	children?: React.ReactNode
	className?: string
	disabled?: boolean
	onClick?: () => void
	type?: "button" | "submit" | "reset"
}

const BaseButton = React.forwardRef<HTMLButtonElement, Props>(
	(
		{
			ariaLabel,
			children,
			className,
			disabled = false,
			onClick = (): void => {},
			type = "button",
		},
		ref
	) => {
		return (
			<StyledBaseButton
				ref={ref}
				aria-label={ariaLabel}
				className={className}
				disabled={disabled}
				onClick={onClick}
				type={type}
			>
				{children}
			</StyledBaseButton>
		)
	}
)

export const StyledBaseButton = styled.button`
	align-items: center;
	background: transparent;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;

	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}
`
export default BaseButton
