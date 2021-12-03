import React, { useState } from 'react';
import { Card } from '../../UI/Card/Card';
import { UIButton } from '../../UI/UIButton/UIButton';
import imgHomero from '../../../Images/homer.JPG'


export const Main = () => {

  const [data, setData] = useState({character: "Homero",image:imgHomero,quote:"Solo porque no me importe no significa que no entienda."});

  const URL = 'https://thesimpsonsquoteapi.glitch.me/quotes';

  const FetchApi=()=> {    
    fetch(URL)
    .then(response=>response.json())
    .then(data=>setData(data[0]))
  }

  return (
    <main>
      <Card data={data} />    
      <UIButton event={FetchApi} />
    </main>
  )
}
