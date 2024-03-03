import React from 'react';
import './App.css';
import {StyledButton, SuperButton} from "./components/Button.styled";
import {Box, Link} from "./components/Link.styled";
import {Menu} from "./components/Menu.styled";

function App() {
	return (
		<div className="App">
			<Menu>
				<ul>
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






