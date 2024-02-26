import React from 'react';
import './App.css';
import styled from "styled-components";

function App() {
	return (
		<div className="App">
			<Menu>
				<ul>#
					<li><a href="#">menu item 1</a></li>
					<li><a href="#">menu item 2</a></li>
					<li><a href="#">menu item 3</a></li>
				</ul>
			</Menu>
			<Box>
				<StyledButton as='a' href={"#"}>Link</StyledButton>
				<StyledButton as={Link} href={"#"}>LinkComponent</StyledButton>
				<StyledButton>Hello</StyledButton>
				<SuperButton>SuperButton</SuperButton>
			</Box>
		</div>
	);
}

export default App;

const StyledButton = styled.button`
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
const Link = styled.a`
  color: #0cb40c;
  font-size: 2rem;
  font-weight: bold;
  background-color: transparent;
  padding: 0;
`


const SuperButton = styled(StyledButton)`
  border-radius: 5px;
  background-color: #ff2525;
`
const Box = styled.div`
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
`
const Menu = styled.nav`
  ul {
    list-style: none;
    padding: 0;
	display: flex;

    li > a {
		color: green;
    }
	li + li {
	  margin-left: 20px;
	}
  }

`