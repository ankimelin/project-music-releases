import React from 'react'
import data from '../data.json'

import { AlbumElement } from './AlbumElement.js'

import '../css/albumList.css'

export const AlbumList = () => {
  return (
    <main className="album-container">
      {data.albums.items.map(album => {
        return <AlbumElement
          key={album.id}
          name={album.name}
          image={album.images[0].url}
          link={album.external_urls.spotify}
          artists={album.artists} />
      })}
    </main>
  )
}

