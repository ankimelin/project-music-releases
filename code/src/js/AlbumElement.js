import React from 'react'

import { Cover } from './Cover.js'
import { AlbumName } from './AlbumName.js'
import { Artist } from './Artist.js'

import '../css/albumElement.css'

export const AlbumElement = ({ name, image, link, artists }) => {
  return (
    <div className="album-card">
      <Cover
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
          return <Artist
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