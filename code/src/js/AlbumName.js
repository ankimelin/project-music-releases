import React from 'react'

import '../css/albumName.css'

export const AlbumName = ({ name, link }) => {
  return (
    <a className="album-name" href={link} target="_blank" rel="noopener noreferrer">
      {name}
    </a>
  )
}