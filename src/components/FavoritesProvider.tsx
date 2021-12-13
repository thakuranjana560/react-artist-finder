import React, { useCallback, useState, createContext } from "react"

import { Artist } from "../types/artist"

interface IFavoritesContext {
	favorites: Artist[]
	handleSelection: (artist: Artist) => void
}

const FavoritesContext = createContext({} as IFavoritesContext)

const FavoritesProvider: React.FC = ({ children }) => {
	const [favorites, setFavorites] = useState<Artist[]>([])

	const handleSelection = useCallback((artist: Artist) => {
		setFavorites(favoriteArtists => {
			const index = favoriteArtists
				.map(artist => artist.mbid)
				.indexOf(artist.mbid)
			if (index === -1) {
				return [...favoriteArtists, artist]
			} else {
				return [
					...favoriteArtists.slice(0, index),
					...favoriteArtists.slice(index + 1),
				]
			}
		})
	}, [])

	return (
		<FavoritesContext.Provider value={{ favorites, handleSelection }}>
			{children}
		</FavoritesContext.Provider>
	)
}

export { FavoritesContext, FavoritesProvider }
