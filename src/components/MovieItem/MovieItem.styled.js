import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MovieItemCard = styled.li`
  width: 250px;
  heigth: 450px;
  margin: 10px;
  position: relative;
  list-style: none;

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
    box-shadow: ${props => props.theme.shadows.boxShadow};
    border: ${props => props.theme.borders.light};
  }
`;

export const MovieItemTitle = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: ${props => props.theme.fontSizes[2]}px;
  color: ${props => props.theme.colors.primary};
  margin: 0 auto;
  height: 70px;
 
`;

export const MovieItemScore = styled.p`
position: absolute;
bottom: 5px;
margin: 0 auto;
`

export const MovieItemLink = styled(NavLink)`
  text-decoration: none;
`;