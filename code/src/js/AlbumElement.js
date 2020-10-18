import React from 'react'

import { AlbumCover } from './AlbumCover.js'
import { AlbumName } from './AlbumName.js'
import { ArtistName } from './ArtistName.js'

import '../css/albumElement.css'

export const AlbumElement = ({ name, image, link, artists }) => {
  return (
    <div className="album-card">
      <AlbumCover
        name={name}
        image={image}
        link={artists}
      />
      <AlbumName
        name={name}
        link={link}
      />
      <div>
        {artists.map((artist, index, artists) => {
          return <ArtistName
            key={artist.id}
            name={artist.name}
            link={artist.external_urls.spotify}
            index={index}
            artists={artists}
          />
        })}
      </div>
    </div>
  )
}