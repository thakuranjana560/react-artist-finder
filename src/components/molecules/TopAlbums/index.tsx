import React, { Fragment } from "react"
import styled from "styled-components"

import { Album } from "../../../types/album"
import AlbumInfo from "../../atoms/AlbumInfo"

interface Props {
	albums: Album[]
}

const TopAlbums: React.FC<Props> = ({ albums }) => {
	return (
		<Fragment>
			<h3>Top Albums</h3>
			<List>
				{albums.map(album => (
					<AlbumInfo
						key={`${album.name}-${album.mbid}`}
						album={album}
					/>
				))}
			</List>
		</Fragment>
	)
}

const List = styled.ul`
	padding-left: 0;
`

export default TopAlbums
