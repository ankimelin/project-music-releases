import React from 'react'
import { Artist } from './Artist.js'

export const Album = (props) => {
  return (
    <article className="album">
      <a href={props.link} target="_blank">
        <div class="parent">
          <img class="cover" src={props.image} alt="cover"></img>
          <img class="play" src='https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_play_circle_filled_white_48px-512.png'></img>
        </div>
      </a>
      <a href={props.link} target="_blank">
        <h1>{props.name}</h1>
      </a>
      <div>
        {props.artists.map((artist, index, artists) => {
          return <Artist key={artist.id} name={artist.name} link={artist.external_urls.spotify} index={index} artists={artists} />
        })}
      </div>
    </article >
  )
}