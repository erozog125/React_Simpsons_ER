import React from 'react'

export const Card = ({card}) => {

    const { URL, name, quote } = card;

  return (
    <div className="card">
      <img src={URL} alt={name} />
      <h2>{name}</h2>
      <hr />
      <p>{quote}</p>
    </div>
  )
}
