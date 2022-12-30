import styled from "styled-components";

export const HomePage = styled.div`
  background-color: ${props => props.theme.colors.background};
`;

export const HomepageTitle = styled.div`
  font-size: ${props => props.theme.fontSizes[7]}px;
  font-family: 'Sevillana', cursive;
  text-align: center;
  color: ${props => props.theme.colors.primary};
  padding-top: 90px;
`;