import React from "react"
import styled from "styled-components"

import { Artist } from "../../../types/artist"
import Button from "../../atoms/Button"

interface Props {
	artist: Artist
	handleClick: (artist: Artist) => void
	variant: "select" | "remove"
}

const ArtistListItem: React.FC<Props> = ({ artist, handleClick, variant }) => {
	const label = variant === "select" ? "Select" : "Remove"

	return (
		<Item>
			<Name>{artist.name}</Name>
			<ButtonContainer>
				<Button
					disabled={!artist.mbid}
					variant="secondary"
					onClick={(): void => handleClick(artist)}
				>
					{label}
				</Button>
			</ButtonContainer>
		</Item>
	)
}

const Item = styled.li`
	align-items: center;
	background-color: #fff;
	border-left: 5px solid #5ba4a4;
	border-radius: 5px;
	box-shadow: 0 4px 6px 4px rgb(91 164 164 / 20%);
	display: flex;
	justify-content: space-between;
	margin: 1.3rem 0;
	padding: 1.5rem 2rem;
	position: relative;
`

const Name = styled.span`
	margin-right: 1rem;
	word-break: break-all;
`

const ButtonContainer = styled.div`
	display: flex;
	min-width: 80px;

	@media (min-width: 769px) {
		min-width: 100px;
	}
`
export default ArtistListItem
