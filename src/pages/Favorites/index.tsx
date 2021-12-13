import React, { useContext, Fragment } from "react"
import styled from "styled-components"

import Layout from "../../components/organisms/Layout"
import Panel from "../../components/atoms/Panel"
import ArtistListItem from "../../components/molecules/ArtistListItem"
import { FavoritesContext } from "../../components/FavoritesProvider"

const FavoritesPage: React.FC = () => {
	const { favorites, handleSelection } = useContext(FavoritesContext)

	return (
		<Layout>
			<Container>
				{favorites.length ? (
					<Fragment>
						<H3>Favorite Artists:</H3>
						<Panel>
							<List>
								{favorites.map(artist => (
									<ArtistListItem
										artist={artist}
										handleClick={handleSelection}
										key={`${artist.name}-${artist.mbid}`}
										variant="remove"
									/>
								))}
							</List>
						</Panel>
					</Fragment>
				) : (
					<NoResults>
						<h3>No favorites artists.</h3>
						<p>
							Try <a href="/search">searching</a> to add some
							artists that you like!
						</p>
					</NoResults>
				)}
			</Container>
		</Layout>
	)
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

const NoResults = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	height: 20vh;
	justify-content: center;

	h3 {
		font-weight: ${(props): number => props.theme.fontWeight.bold};
	}
`

export default FavoritesPage
