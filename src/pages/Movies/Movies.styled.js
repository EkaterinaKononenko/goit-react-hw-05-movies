import styled from "styled-components";
import {Form, Field } from 'formik';

export const FormWrap = styled(Form)`
align-item: center;
justify-content: center;
`;

export const Input = styled(Field)`
  width: 600px;
  padding: ${props => props.theme.space[3]}px;
  margin-left: ${props => props.theme.space[8]}px;
  font-size: ${props => props.theme.fontSizes[5]}px;
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.colorBtnHover};
  border: ${props => props.theme.borders.heading};
  font-family: 'Rubik Bubbles', cursive;
`;

export const BtnSearch = styled.button`
  width: ${props => props.theme.space[8]}px;
  padding: ${props => props.theme.space[3]}px;
  margin: ${props => props.theme.space[3]}px;
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

export const Label = styled.label`
color: black
`;

