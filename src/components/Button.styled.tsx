import styled, {css} from "styled-components";

export type StyledButtonPropsType = {
	color?: string
	fontSize?: string
	primary?: boolean
	outlined?: boolean
	buttonType: "primary" | "outlined"
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

  // //primary1
    // ${props => props.primary && css<StyledButtonPropsType>`
  //   background-color: ${props => props.color || '#41ff00'};
  //   color: snow;
  // `}
  //
  // // outlined1
    // ${props => props.outlined && css<StyledButtonPropsType>`
  //   border: 2px solid ${props => props.color || '#41ff00'};
  //   color: ${props => props.color || '#defc1d'};
  //   background-color: transparent;
  // `}

  //primary2
  ${props => props.buttonType === "primary" && css<StyledButtonPropsType>`
    background-color: ${props => props.color || '#41ff00'};
    color: snow;

    &:hover {
      background-color: red;
    }
  `} // outlined2
  ${props => props.buttonType === "outlined" && css<StyledButtonPropsType>`
    border: 2px solid ${props => props.color || '#41ff00'};
    color: ${props => props.color || '#defc1d'};
    background-color: transparent;

    &:hover {
      background-color: burlywood;
    }
  `}



`

// 1) SC Основы
// export const SuperButton = styled(StyledButton)`
//   border-radius: 5px;
//   background-color: #ff2525;
//   &:hover{
//     animation: ${Animations} 2s ease-in-out;
//   }
// `