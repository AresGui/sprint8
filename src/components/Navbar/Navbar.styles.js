import styled from 'styled-components';

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: rgba(35,31,32,255);
`;

export const LogoWrapper = styled.div`
  display: flex;
  margin-left: 550px;
  justify-content: center;
  align-items: center;
  img {
    width: 250px;
    height: 200px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: #666666;
  align-items: center;

  a {
    margin: 10px;
    background-color: rgba(35,31,32,255);
    color: #afacac;
    border: none;
    font-size: 16px;
    cursor: pointer;  
    text-decoration:none;
  }
`;

export const NavLinksWrapper = styled.div`
  display: flex;
  border-top: #666666 solid;
  border-bottom: #666666 solid;
  justify-content: center;
  background-color: rgba(35,31,32,255);

  a { 
    text-decoration: none;
    color:  #afacac;
    font-size: 16px;
    padding: 10px 20px;
    border-left: 1px #666666 solid;
    border-right: 1px #666666 solid;

     &.active {
      color: white !important; 
      border-bottom: 2px solid blue !important; 
    }
  }
`;


