import styled from "styled-components";
import {Animations} from "../styles/animation/Animations";

export const StyledButton = styled.button`
  border: none;
  background-color: #3459ff;
  padding: 10px 20px;
  color: snow;
  font-size: 2rem;
  font-weight: bold;

  &:hover {
    background-color: #d5c31e;
  }

  &:last-child {
    background-color: #44a928;
  }
`
export const SuperButton = styled(StyledButton)`
  border-radius: 5px;
  background-color: #ff2525;
  animation: ${Animations} 2s ease-in-out;
`