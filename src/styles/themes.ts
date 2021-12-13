import { DefaultTheme } from "styled-components/native"
import { neutral, orange, yellow } from "./colors"
import { fontWeight, typeScale } from "./typography"

export const lightTheme: DefaultTheme = {
	borderColor: neutral[300],
	buttonBorderRadius: "40px",
	fontWeight: fontWeight,
	panelBorderRadius: "8px",
	panelBoxShadow:
		"0 1px 2px rgba(60,64,67, 0.3), 0 1px 3px 1px rgba(60,64,67, 0.15)",
	primaryBackgroundColor: neutral[100],
	secondaryBackgroundColor: neutral[200],
	secondaryColor: orange[500],
	starColor: yellow[500],
	textColorOnBackgroundColor: neutral[900],
	textColorOnSecondaryColor: neutral[100],
	typeScale: typeScale,
}
