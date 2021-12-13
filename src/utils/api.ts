import { Artist, ArtistDetails } from "../types/artist"
import { Album } from "../types/album"

import {
	ARTIST_SEARCH_URL,
	ARTIST_INFO_URL,
	ARTIST_TOP_ALBUMS_URL,
} from "../constants"

export async function searchArtists(query: string): Promise<Artist[]> {
	const result = await fetch(`${ARTIST_SEARCH_URL}${query}`).then(response =>
		response.json()
	)

	return result.results.artistmatches.artist
}

export async function fetchArtistDetails(id: string): Promise<ArtistDetails> {
	const result = await fetch(`${ARTIST_INFO_URL}${id}`).then(response =>
		response.json()
	)

	return result.artist
}

export async function fetchArtistTopAlbums(id: string): Promise<Album[]> {
	const result = await fetch(`${ARTIST_TOP_ALBUMS_URL}${id}`).then(response =>
		response.json()
	)

	if (result.topalbums && result.topalbums.album) {
		return result.topalbums.album
	} else {
		return []
	}
}
