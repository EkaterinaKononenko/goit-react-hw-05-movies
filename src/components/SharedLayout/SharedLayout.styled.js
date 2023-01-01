import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  height: 60px;
  width: 100%;
  padding-top: 20px; 
  background-color: ${props => props.theme.colors.thirdBackground};
  top: 0;
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-item: center;
`;

export const BtnHomeLink = styled(NavLink)`
  width: ${props => props.theme.space[8]}px;
  padding: ${props => props.theme.space[3]}px;
  margin: ${props => props.theme.space[4]}px;
  font-size: ${props => props.theme.fontSizes[5]}px;
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
export const BtnMovieLink = styled(NavLink)`
  width: ${props => props.theme.space[8]}px;
  padding: ${props => props.theme.space[3]}px;
  margin: ${props => props.theme.space[4]}px;
  font-size: ${props => props.theme.fontSizes[5]}px;
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