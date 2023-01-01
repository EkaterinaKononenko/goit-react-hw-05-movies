import styled from "styled-components";
import {Form, Field } from 'formik';

export const FormWrap = styled(Form)`
padding-top: 90px;
align-item: center;
justify-content: center;
flex-wrap: nowrap;`;

export const Input = styled(Field)`
  width: 500px;
  padding: ${props => props.theme.space[3]}px;
  margin-left: ${props => props.theme.space[8]}px;
  font-size: ${props => props.theme.fontSizes[4]}px;
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.colorBtnHover};
  border: ${props => props.theme.borders.heading};
  font-family: 'Rubik Bubbles', cursive;
`;

export const BtnSearch = styled.button`
  width: ${props => props.theme.space[8]}px;
  padding: ${props => props.theme.space[3]}px;
  margin: ${props => props.theme.space[3]}px;
  font-size: ${props => props.theme.fontSizes[4]}px;
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



