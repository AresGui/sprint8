import React from 'react';
import { CardStyles, TextDiv } from './Card.styles';

function Card({ index, starship }) {
  const id = index + 1;
  const image = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;

  return (
    <CardStyles>
      <h1>{starship.name.toUpperCase()}</h1>
      <img src={image} alt="Starship" />
      <TextDiv>
        <div>
          <p>MODEL: {starship.model}</p>
          <p>STARSHIP CLASS: {starship.starship_class}</p>
          <p>MANUFACTURER: {starship.manufacturer}</p>
          <p>COST: {starship.cost_in_credits}</p>
        </div>
        <div>
          <p>CREW: {starship.crew}</p>
          <p>PASSENGER CAPACITY: {starship.passengers}</p>
          <p>CARGO CAPACITY: {starship.cargo_capacity}</p>
          <p>CONSUMABLES: {starship.consumables}</p>
        </div>
        <div>
          <p>LENGTH: {starship.length}</p>
          <p>MAXIMUM ATMOSPHERING SPEED: {starship.max_atmosphering_speed}</p>
          <p>HYPERDRIVE RATING: {starship.hyperdrive_rating}</p>
          <p>MAXIMUM SPEED IN REALSPACE: {starship.max_atmosphering_speed}</p>
        </div>
      </TextDiv>
    </CardStyles>
  )
}

export default Card
