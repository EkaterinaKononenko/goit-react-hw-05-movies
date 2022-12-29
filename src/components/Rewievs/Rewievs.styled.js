import styled from "styled-components";

export const RewievsAuthor = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.colors.primary};
  margin-right: ${props => props.theme.space[4]}px;
  margin-bottom: ${props => props.theme.space[4]}px;
  font-family: 'Sevillana', cursive;
  font-size: ${props => props.theme.fontSizes[6]}px;
  object-fit: cover;
  width: 100%;
  text-align: center;
  }
`;

export const RewievsContent = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-right: ${props => props.theme.space[4]}px;
  margin-bottom: ${props => props.theme.space[4]}px;
  font-family: 'Montserrat', sans-serif;
  font-size: ${props => props.theme.fontSizes[3]}px;
  line-height: 1.5;
  object-fit: cover;
  width: 100%;

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
    box-shadow: ${props => props.theme.shadows.boxShadow};
  }
`;

export const RewievsCard = styled.ul`
  background-color: ${props => props.theme.colors.background};
`;