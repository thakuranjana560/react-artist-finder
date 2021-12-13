export interface Album {
	name?: string
	playcount?: number
	mbid?: string
	url?: string
	artist?: AlbumArtist
	image?: AlbumImage | AlbumImage[]
}

interface AlbumImage {
	"#text"?: string
	size?: string
}

interface AlbumArtist {
	name?: string
	mbid?: string
	url?: string
}
