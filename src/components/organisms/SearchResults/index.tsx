import React from "react"
import styled from "styled-components"

import { Artist } from "../../../types/artist"
import Panel from "../../atoms/Panel"
import ArtistListItem from "../../molecules/ArtistListItem"

interface Props {
	handleArtistSelect: (artist: Artist) => void
	results: Artist[]
}

const SearchResults: React.FC<Props> = ({ handleArtistSelect, results }) => {
	if (results.length) {
		return (
			<Container>
				<H3>Results:</H3>
				<Panel>
					<List>
						{results.map(artist => (
							<ArtistListItem
								artist={artist}
								handleClick={handleArtistSelect}
								key={`${artist.name}-${artist.mbid}`}
								variant="select"
							/>
						))}
					</List>
				</Panel>
			</Container>
		)
	}
	return null
}

const Container = styled.div`
	width: 80vw;

	@media (min-width: 769px) {
		width: 60vw;
	}
`
const List = styled.ul`
	margin: 0 auto;
	padding: 0 1rem;
	width: 100%;

	li:last-child {
		border-bottom: none;
	}
`

const H3 = styled.h3`
	align-self: flex-start;
	font-weight: ${(props): number => props.theme.fontWeight.bold};
`

export default SearchResults
