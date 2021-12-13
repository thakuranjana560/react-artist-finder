import "styled-components/native"

declare module "styled-components" {
	export interface DefaultTheme {
		borderColor: string
		buttonBorderRadius: string
		panelBorderRadius: string
		panelBoxShadow: string
		primaryBackgroundColor: string
		secondaryBackgroundColor: string
		secondaryColor: string
		starColor: string
		textColorOnBackgroundColor: string
		textColorOnSecondaryColor: string
		fontWeight: {
			bold: number
			regular: number
		}
		typeScale: {
			h1: string
			h2: string
			h3: string
			h4: string
			h5: string
			p: string
		}
	}
}
