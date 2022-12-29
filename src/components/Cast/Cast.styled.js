import styled from "styled-components";

export const ActorName = styled.h2`
  font-size: ${props => props.theme.fontSizes[5]}px;
  font-family: 'Sevillana', cursive;
  text-align: center;
  color: ${props => props.theme.colors.primary};
`;


export const ActorImg = styled.img`
  width: ${props => props.theme.space[8]}px;
`;

export const ActorCard = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-right: ${props => props.theme.space[5]}px;
  margin-bottom: ${props => props.theme.space[4]}px;
  object-fit: cover;
  width: ${props => props.theme.space[8]}px;
  &: last-child {
    margin-right: ${props => props.theme.space[0]}px;
  }

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
    outline: ${props => props.theme.borders.heading};
    box-shadow: ${props => props.theme.shadows.boxShadow};
  }
`;

export const ActorsWrap = styled.ul`
display: flex;
flex-wrap: wrap;`

