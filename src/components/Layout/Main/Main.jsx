import React from 'react';
import { Card } from '../../UI/Card/Card';
import homeroImg from '../../../Images/homer.JPG';  

export const Main = () => {
  const card = { URL:homeroImg, name:"Homero Simpsons", quote:"Te amo March" };
  return (
    <main>
      <Card card={card} />      
    </main>
  )
}
