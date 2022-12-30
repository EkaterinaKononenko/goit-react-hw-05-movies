import styled from "styled-components";

export const ActorName = styled.h2`
  font-size: ${props => props.theme.fontSizes[5]}px;
  font-family: 'Sevillana', cursive;
  text-align: center;
  color: ${props => props.theme.colors.primary};

`;


export const ActorImg = styled.img`
  width:250px;
  height: 306px;
  object-fit: cover;
`;

export const ActorCard = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-right: ${props => props.theme.space[5]}px;
  margin-bottom: ${props => props.theme.space[4]}px;
  object-fit: cover;
  width: ${props => props.theme.space[8]}px;
  background-color: ${props => props.theme.colors.background};
  position: relative;


  &: last-child {
    margin-right: ${props => props.theme.space[0]}px;
  }

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
    box-shadow: ${props => props.theme.shadows.boxShadow};
    border: ${props => props.theme.borders.heading};
  }
`;

export const ActorsWrap = styled.ul`
display: flex;
flex-wrap: wrap;
`

