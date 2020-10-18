import React from 'react'

import { Artist } from './Artist.js'

export const ArtistList = ({ artists }) => {
  return (
    <>
      {artists.map(artist => {
        return <Artist
          key={artist.id}
          name={artist.name}
          link={artist.external_urls.spotify}
          index={artist.index}
          artists={artist.artists}
        />
      })}
    </>
  )
}

