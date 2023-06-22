import React from 'react';
import { NavLink } from 'react-router-dom';
import starWars from './star-wars-logo.png';
import { NavWrapper, LogoWrapper, ButtonWrapper, /* Button */ NavLinksWrapper } from './Navbar.styles';

/* import Register from '../Register/Register';
import Login from '../Login/Login'; */

const NavBar = () => {

  return (
    <>
      <NavWrapper>
        <LogoWrapper>
          <img src={starWars} alt="Star wars logo" />
        </LogoWrapper>
        <ButtonWrapper >
          <NavLink to="/Login">LOG IN</NavLink>
          <div><p>//</p></div>
          <NavLink to="/Register">SIGN UP</NavLink>
        </ButtonWrapper >
      </NavWrapper>
      <NavLinksWrapper>
        <NavLink to="/" activeClassName="active">HOME</NavLink>
        <NavLink to="/Starships" activeClassName="active">STARSHIPS</NavLink>
      </NavLinksWrapper>
    </>
  )
};

export default NavBar;

