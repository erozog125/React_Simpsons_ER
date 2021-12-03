import React from 'react';
import './Card.css';

export const Card = (data) => {

  const { character, image, quote } = data.data;

  return (
    <div className="card">
      <img src={image} alt={character} />
      <h2>{character}</h2>
      <hr />
      <p>{quote}</p>
    </div>
  )
}
