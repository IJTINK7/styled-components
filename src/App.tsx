import React from 'react';
import './App.css';
import styled from "styled-components";

function App() {
	return (
		<div className="App">
			<Box>
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
`