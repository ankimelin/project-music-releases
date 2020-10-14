import React from 'react'
import data from './data.json'
import { Album } from './Album.js'

export const App = () => {
  return (
    <div className="album-container">
      {data.albums.items.map(album => {
        return <Album key={album.id} name={album.name} image={album.images[0].url} link={album.external_urls.spotify} artists={album.artists} />
      })}
    </div>
  )
}

