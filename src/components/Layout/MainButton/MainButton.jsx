import React from 'react'
import { UIButton } from '../../UI/UIButton/UIButton'
import { Card } from '../../UI/Card/Card';

export const MainButton = () => {

  const URL = 'https://thesimpsonsquoteapi.glitch.me/quotes';

  const FetchApi=()=> {    
    console.log("Funciona");
    fetch(URL)
    .then(response=>response.json())
    .then(data=>{
       <Card card={data} /> 
    })

  }

  return (
    <UIButton event={FetchApi} />
  )
}
