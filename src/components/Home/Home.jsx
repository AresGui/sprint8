import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MainButtonWrapper } from './Home.styles';

const Home = () => {

  const navigate = useNavigate();
  const handleButton = () => {
    navigate('/Starships');
  }

  return (
    <MainButtonWrapper>
      <button onClick={handleButton}>GO TO STARSHIPS</button>
    </MainButtonWrapper>
  )
}

export default Home;
