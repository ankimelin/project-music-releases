import React from 'react'

import '../css/artistName.css'

const displaySeparator = (index, artists) => {
  if (index === artists.length - 1) {
    return null
  } if (index === artists.length - 2) {
    return <p>&nbsp;&&nbsp;</p>
  } else {
    return <p>,&nbsp;</p>
  }
}

export const ArtistName = ({ name, link, index, artists }) => {
  return (
    <div className="artist">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
      {displaySeparator(index, artists)}
    </div>
  )
}

