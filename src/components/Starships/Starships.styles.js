import styled from 'styled-components';

export const StarshipsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 200px;
`;

export const Starship = styled.div`
    width: calc(100 % - 30px);
    margin: 15px;
    background-color: #2e2d2d;
    color: #afacac;
    border: none;
    cursor: pointer;
    padding: 5px 15px;

`;

export const MoreButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const MoreButton = styled.button`
    padding: 10px 20px;
    margin: 20px;
    border-radius: 5px;
    border: none;
    color:  white;
    background-color:  #5b5a5a;
    cursor: pointer;
`;
