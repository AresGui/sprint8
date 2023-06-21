import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { StarshipsWrapper, Starship, MoreButton, MoreButtonWrapper } from './Starships.styles';

const Starships = () => {
  const [starships, setStarships] = useState([]);
  const [pages, setPages] = useState(1);

  const handleShowMore = () => {
    setPages(pages + 1);
  }

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/starships/?page=${pages}`)
      .then((res) => {
        const newStarships = res.data.results;
        setStarships((prevStarships) => [...prevStarships, ...newStarships]);
      })
      .catch((error) => {
        console.log('Error fetching starships:', error);
      });
  }, [pages]);

  console.log(starships);
  //función que dirige al componente Card
  /*  const handleCard = () => {
 
   } */

  return (
    <>
      <StarshipsWrapper>
        {starships.map((starship) => (
          <div key={`${starship.name} + ${Math.random()}`}>
            <Starship>
              <p>{starship.name}</p>
              <p>{starship.model}</p>
              {/* 
              Here should come the conditional rendering with the card */}
            </Starship>
          </div>
        ))}
        <MoreButtonWrapper>
          <MoreButton onClick={handleShowMore}>VIEW MORE</MoreButton>
        </MoreButtonWrapper>
      </StarshipsWrapper>
    </>
  );
}

export default Starships;