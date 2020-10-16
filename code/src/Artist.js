import React from 'react'

import './artist.css'

const after = (index, artists) => {
  if (index === artists.length - 1) {
    return null
  } if (index === artists.length - 2) {
    return <p>&nbsp;&&nbsp;</p>
  } else {
    return <p>,&nbsp;</p>
  }
}

export const Artist = ({ name, link, index, artists }) => {
  return (
    <div className="artist">
      <a href={link} target="_blank" rel="noopener noreferrer" >
        {name}
      </a>
      {after(index, artists)}
    </div>
  )
}

