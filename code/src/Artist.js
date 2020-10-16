import React from 'react'

import './artist.css'

const after = (index, artists) => {
  if (index === artists.length - 1) {
    return null
  }
  if (index === artists.length - 2) {
    return <p class="and">&</p>
  } else {
    return <p class="comma">,</p>
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

  // if (artists.length === 1 && index === 0) {
  //   return (
  //     <div className="artist">
  //       <a href={link} target="_blank" rel="noopener noreferrer" >
  //         <h2>{name}</h2>
  //       </a>
  //     </div>
  //   )
  // }
  // if (artists.length === 2 && index === 0) {
  //   return (
  //     <div className="artist">
  //       <a href={link} target="_blank" rel="noopener noreferrer" >
  //         <h2>{name}</h2>
  //       </a>
  //       <p>&</p>
  //     </div>
  //   )
  // }
  // if (artists.length === 2 && index === 1) {
  //   return (
  //     <div className="artist">
  //       <a href={link} target="_blank" rel="noopener noreferrer" >
  //         <h2>{name}</h2>
  //       </a>
  //     </div>
  //   )
  // }
  // if (artists.length === 3 && index === 0) {
  //   return (
  //     <div className="artist">
  //       <a href={link} target="_blank" rel="noopener noreferrer" >
  //         <h2>{name},</h2>
  //       </a>
  //     </div>
  //   )
  // }
  // if (artists.length === 3 && index === 1) {
  //   return (
  //     <div className="artist">
  //       <a href={link} target="_blank" rel="noopener noreferrer" >
  //         <h2>{name}</h2>
  //       </a>
  //       <p>&</p>
  //     </div>
  //   )
  // }
  // if (artists.length === 3 && index === 2) {
  //   return (
  //     <div className="artist">
  //       <a href={link} target="_blank" rel="noopener noreferrer" >
  //         <h2>{name}</h2>
  //       </a>
  //     </div>
  //   )
  // }
  // else {
  //   return (
  //     null
  //   )
  // }
}

