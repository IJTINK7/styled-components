import React from 'react';
import './App.css';
import {StyledButton} from "./components/Button.styled";
import {Box} from "./components/Link.styled";

function App() {
	return (
		<div className="App">
			<Box>
				<StyledButton color={"red"}>Hello</StyledButton>
			</Box>
		</div>
	);
}

export default App;

// 1) SC Основы

//  function App() {
// 	return (
// 		<div className="App">
// 			<Menu>
// 				<ul>
// 					<li><a href="#">menu item 1</a></li>
// 					<li><a href="#">menu item 2</a></li>
// 					<li><a href="#">menu item 3</a></li>
// 				</ul>
// 			</Menu>
// 			<Box>
// 				<StyledButton as='a' href={"#"}>Link</StyledButton>
// 				<StyledButton as={Link} href={"#"}>LinkComponent</StyledButton>
// 				<StyledButton>Hello</StyledButton>
// 				<SuperButton>SuperButton</SuperButton>
// 			</Box>
// 		</div>
// 	);
// }
//
// export default App;




