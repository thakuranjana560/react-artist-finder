import React from "react"
import styled from "styled-components"
import { sanitizeUrl } from "@braintree/sanitize-url"

import { ReactComponent as Slash } from "../../../assets/slash.svg"
import { Album } from "../../../types/album"
import { NULL_ALBUM } from "../../../constants"

interface Props {
	album: Album
}

const AlbumInfo: React.FC<Props> = ({ album }) => {
	const image =
		album.image && Array.isArray(album.image)
			? album.image.find(image => image.size === "medium")
			: album.image

	if (album.name !== NULL_ALBUM) {
		return (
			<Row>
				<ImageContainer>
					{image && image["#text"] ? (
						<img
							src={sanitizeUrl(image["#text"])}
							alt={`${album.name} album cover`}
						/>
					) : (
						<Slash />
					)}
				</ImageContainer>
				<h4>{album.name}</h4>
			</Row>
		)
	}
	return null
}

const Row = styled.li`
	align-items: center;
	display: flex;
	margin-bottom: 1rem;

	h4 {
		margin-left: 1rem;
	}
`

const ImageContainer = styled.div`
	height: 64px;
	width: 64px;
`
export default AlbumInfo
