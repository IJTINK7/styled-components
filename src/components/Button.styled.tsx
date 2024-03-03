import styled from "styled-components";

export type StyledButtonPropsType = {
	color?: string
	fontSize?: string
}

export const StyledButton = styled.button<StyledButtonPropsType>`
  border: none;
  background-color: #3459ff;
  padding: 10px 20px;
  color: ${props => props.color || '#defc1d'};
  font-size: ${props => props.fontSize || "40px"};
  font-weight: bold;

  &:hover {
    background-color: #d5c31e;
  }
`


// 1) SC Основы
// export const SuperButton = styled(StyledButton)`
//   border-radius: 5px;
//   background-color: #ff2525;
//   &:hover{
//     animation: ${Animations} 2s ease-in-out;
//   }
// `