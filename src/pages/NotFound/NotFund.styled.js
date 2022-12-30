import styled from "styled-components";


export const NotFoundMain = styled.main`
  font-size: ${props => props.theme.fontSizes[7]}px;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  color: ${props => props.theme.colors.primary};
  text-align: center;
  margin: 0 auto;
`;

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