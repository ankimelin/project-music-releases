import React from 'react'
import { Artist } from './Artist.js'

export const Album = (props) => {
  return (
    <article className="album">
      <a href={props.link} target="_blank">
        <img src={props.image} alt="cover"></img>
      </a>
      <h1>{props.name}</h1>
      <div>
        {props.artists.map((artist, index, artists) => {
          return <Artist key={artist.id} name={artist.name} link={artist.external_urls.spotify} index={index} artists={artists} />
        })}
      </div>
    </article>
  )
}