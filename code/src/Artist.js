import React from 'react'

export const Artist = props => {
  if (props.index === 0 && props.artists.length === 1) {
    return (
      <div className="artist">
        <a href={props.link} target="_blank">
          <h2>{props.name}</h2>
        </a>
      </div>
    )
  }
  if (props.index === 0 && props.artists.length === 2) {
    return (
      <div className="artist">
        <a href={props.link} target="_blank">
          <h2>{props.name} &</h2>
        </a>
      </div>
    )
  }
  if (props.index === 1 && props.artists.length === 2) {
    return (
      <div className="artist">
        <a href={props.link} target="_blank">
          <h2>{props.name}</h2>
        </a>
      </div>
    )
  }
  if (props.index === 0 && props.artists.length > 2) {
    return (
      <div className="artist">
        <a href={props.link} target="_blank">
          <h2>{props.name},</h2>
        </a>
      </div>
    )
  }
  if (props.index === 1 && props.artists.length > 2) {
    return (
      <div className="artist">
        <a href={props.link} target="_blank">
          <h2>{props.name} & </h2>
        </a>
      </div>
    )
  }
  if (props.index === 2 && props.artists.length > 2) {
    return (
      <div className="artist">
        <a href={props.link} target="_blank">
          <h2>{props.name}</h2>
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

