export interface Artist {
	name?: string
	listeners?: string
	mbid: string
	url?: string
	streamable?: string
	image?: ArtistImage | ArtistImage[]
}

interface ArtistImage {
	"#text"?: string
	size?: string
}

export interface ArtistDetails {
	name?: string
	mbid?: string
	url?: string
	image?: ArtistImage | ArtistImage[]
	streamable?: string
	ontour?: string
	stats?: ArtistStats | ArtistStats[]
	similar?: SimilarArtists | SimilarArtists[]
	tags?: { tag: Tag | Tag[] }
	bio: Bio
}

interface ArtistStats {
	listeners?: string
	playcount?: string
}

interface SimilarArtists {
	name?: string
	url?: string
	image?: ArtistImage | ArtistImage[]
}

// interface Tags {
// 	tag?: Tag | Tag[]
// }

interface Tag {
	name?: string
	url?: string
}

interface Bio {
	links?: { link: Link | Link[] }
	published?: string
	summary?: string
	content?: string
}

interface Link {
	"#text"?: string
	rel?: string
	href?: string
}
