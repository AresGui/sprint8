import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { StarshipsWrapper, Starship, MoreButton, MoreButtonWrapper } from './Starships.styles';
import Card from '../Card/Card';

const Starships = () => {
  const [starships, setStarships] = useState([]);
  const [page, setPage] = useState(1);

  const [selectedStarship, setSelectedStarship] = useState(null);
  const [isOpen, setIsOpen] = useState(false);


  const handleShowMore = () => {
    setPage(page + 1);
  }

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/starships/?page=${page}`)
      .then((res) => {
        const newStarships = res.data.results;
        setStarships((prevStarships) => [...prevStarships, ...newStarships]);
      })
      .catch((error) => {
        console.log('Error fetching starships:', error);
      });
  }, [page]);


  const handleButton = (starship) => {
    setSelectedStarship(starship);
    setIsOpen(!isOpen);
  };


  return (
    <>
      <StarshipsWrapper>
        {starships.map((starship, index) => (
          <Starship key={index} onClick={() => handleButton(starship)}>
            {selectedStarship === starship && isOpen ? (
              <Card index={index} starship={starship} />
            ) : (
              <>
                <p>{starship.name.toUpperCase()}</p>
                <p>{starship.model}</p>
              </>
            )}
          </Starship>
        ))}
        <MoreButtonWrapper>
          <MoreButton onClick={handleShowMore}>VIEW MORE</MoreButton>
        </MoreButtonWrapper>
      </StarshipsWrapper>
    </>
  );
}

export default Starships;