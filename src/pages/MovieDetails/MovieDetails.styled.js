import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const BtnBack = styled.button`
  width: ${props => props.theme.space[8]}px;
  padding: ${props => props.theme.space[3]}px;
  margin: ${props => props.theme.space[4]}px;
  font-size: ${props => props.theme.fontSizes[5]}px;
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.colorBtnHover};
  border: ${props => props.theme.borders.heading};
  font-family: 'Rubik Bubbles', cursive;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.colorBtnHover};
    background-color: ${props => props.theme.colors.primary};
    box-shadow: ${props => props.theme.shadows.boxShadow};
  }
`;

export const MovieDetailsImg = styled.div`
  padding: ${props => props.theme.space[4]}px;
`;

export const MovieDetailsTitle = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: ${props => props.theme.fontSizes[6]}px;
  color: ${props => props.theme.colors.primary};
`;


export const MovieDetailsWrap = styled.div`
 display: flex;
`;

export const MovieDetailsText = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: 'Montserrat', sans-serif;
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes[4]}px;
`;

export const NavItem = styled(NavLink)`
  width: ${props => props.theme.space[8]}px;
  padding: ${props => props.theme.space[3]}px;
  margin: ${props => props.theme.space[5]}px;
  font-size: ${props => props.theme.fontSizes[4]}px;
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.colorBtnHover};
  border: ${props => props.theme.borders.heading};
  font-family: 'Rubik Bubbles', cursive;
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.colorBtnHover};
    background-color: ${props => props.theme.colors.primary};
    box-shadow: ${props => props.theme.shadows.boxShadow};
  }
`;

export const NavLinkWrap = styled.li`
list-style: none;`

export const NavLinkBlock = styled.ul`
display: flex;
`