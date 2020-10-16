import React from 'react'

export const Artist = ({ name, link, index, artists }) => {
  if (artists.length === 1 && index === 0) {
    return (
      <div className="artist">
        <a href={link} target="_blank">
          <h2>{name}</h2>
        </a>
      </div>
    )
  }
  if (artists.length === 2 && index === 0) {
    return (
      <div className="artist">
        <a href={link} target="_blank">
          <h2>{name}</h2>
        </a>
        <p>&</p>
      </div>
    )
  }
  if (artists.length === 2 && index === 1) {
    return (
      <div className="artist">
        <a href={link} target="_blank">
          <h2>{name}</h2>
        </a>
      </div>
    )
  }
  if (artists.length === 3 && index === 0) {
    return (
      <div className="artist">
        <a href={link} target="_blank">
          <h2>{name},</h2>
        </a>
      </div>
    )
  }
  if (artists.length === 3 && index === 1) {
    return (
      <div className="artist">
        <a href={link} target="_blank">
          <h2>{name}</h2>
        </a>
        <p>&</p>
      </div>
    )
  }
  if (artists.length === 3 && index === 2) {
    return (
      <div className="artist">
        <a href={link} target="_blank">
          <h2>{name}</h2>
        </a>
      </div>
    )
  }
  else {
    return (
      null
    )
  }
}

