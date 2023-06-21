import { NavLink } from 'react-router-dom';
import starWars from './star-wars-logo.png';
import { NavWrapper, LogoWrapper, ButtonWrapper, Button, NavLinksWrapper } from './Navbar.styles';


const NavBar = () => (
  <>
    <NavWrapper>
      <LogoWrapper>
        <img src={starWars} alt="Star wars logo" />
      </LogoWrapper>
      <ButtonWrapper >
        <Button>LOG IN</Button>
        <div><p>//</p></div>
        <Button>SIGN UP</Button>
      </ButtonWrapper >
    </NavWrapper>
    <NavLinksWrapper>
      <NavLink to="/" activeClassName="active">HOME</NavLink>
      <NavLink to="/Starships" activeClassName="active">STARSHIPS</NavLink>
    </NavLinksWrapper>
  </>
);

export default NavBar;

