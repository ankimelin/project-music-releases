import React from 'react'
import data from './data.json'
import { Album } from './Album.js'

console.log(data)

console.log(data.albums.items[0].name)
console.log(data.albums.items[0].images[0].url)
console.log(data.albums.items[0].external_urls.spotify)

console.log(data.albums.items[0].artists[0].name)
console.log(data.albums.items[0].artists[0].external_urls.spotify)

export const App = () => {
  return (
    <div className="album-container">
      {data.albums.items.map(album => {
        return <Album key={album.id} name={album.name} image={album.images[0].url} link={album.external_urls.spotify} artists={album.artists} />
      })}
    </div>
  )
}

