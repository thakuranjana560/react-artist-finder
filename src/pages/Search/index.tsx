import React, { useState, Fragment } from "react"

import { Artist } from "../../types/artist"
import { searchArtists } from "../../utils/api"
import Layout from "../../components/organisms/Layout"
import ArtistSearchBar from "../../components/organisms/ArtistSearchBar"
import SearchResults from "../../components/organisms/SearchResults"
import ArtistInfo from "../../components/organisms/ArtistInfo"

const SearchPage: React.FC = () => {
	const [query, setQuery] = useState<string>("")
	const [searchResults, setSearchResults] = useState<Artist[]>([])
	const [selectedArtist, setSelectedArtist] = useState<Artist | null>()

	const handleChangeQuery = (
		e: React.ChangeEvent<HTMLInputElement>
	): void => {
		setQuery(e.target.value)
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault()
		if (query.trim().length) {
			searchArtists(query.trim()).then(results => {
				setSearchResults(results)
			})
		}
	}

	const handleArtistSelect = (artist: Artist | null): void => {
		setSelectedArtist(artist)
	}

	return (
		<Layout>
			{selectedArtist ? (
				<ArtistInfo
					artist={selectedArtist}
					handleArtistSelect={handleArtistSelect}
				/>
			) : (
				<Fragment>
					<ArtistSearchBar
						handleChangeQuery={handleChangeQuery}
						handleSubmit={handleSubmit}
						query={query}
					/>
					<SearchResults
						results={searchResults}
						handleArtistSelect={handleArtistSelect}
					/>
				</Fragment>
			)}
		</Layout>
	)
}

export default SearchPage
