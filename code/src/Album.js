import React from 'react'
import { Artist } from './Artist.js'

export const Album = ({ name, image, link, artists }) => {

  return (
    <article className="album">
      <a href={link} target="_blank" rel="noopener noreferrer" >
        <div class="cover-container">
          <img class="cover" src={image} alt={name} ></img>
          <img class="play" src='https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_play_circle_filled_white_48px-512.png' alt="play icon"></img>
        </div>
      </a>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h1>{name}</h1>
      </a>
      <div>
        {artists.map((artist, index, artists) => {
          return <Artist key={artist.id} name={artist.name} link={artist.external_urls.spotify} index={index} artists={artists} />
        })}
      </div>
    </article >
  )
}