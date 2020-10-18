import React from 'react'

import '../css/cover.css'

export const Cover = ({ name, image, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" >
      <div class="cover-container">
        <img class="cover" src={image} alt={name}></img>
        <img class="play" src='https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_play_circle_filled_white_48px-512.png' alt="play icon"></img>
      </div>
    </a>
  )
}