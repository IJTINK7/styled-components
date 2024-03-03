import styled from "styled-components";
import {theme} from "../styles/Theme.styled";

export const Link = styled.a`
  color: #0cb40c;
  font-size: 2rem;
  font-weight: bold;
  background-color: transparent;
  padding: 0;
`
export const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: zoom-in;
  }
  @media ${theme.media.tablet}{
      flex-direction: column;
  }
  @media ${theme.media.mobile}{
    background-color: ${theme.colors.gray.light}
  }
`
