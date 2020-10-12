import React from 'react'

export const Artist = (props) => {
  // console.log(props)
  return (
    <div>
      <a href={props.link} target="_blank">
        <h2>{props.name}</h2>
      </a>
    </div>
  )
}