import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components/macro'
import { ExampleComponent } from 'lib'

const StyledHeader = styled.header`
  background-color: hotpink;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

function App() {
  return (
    <div className="App">
      <StyledHeader>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ExampleComponent text="Create React Library Example 😄" />
      </StyledHeader>
    </div>
  );
}

export default App;
