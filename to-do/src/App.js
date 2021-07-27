import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Route } from 'react-router-dom';

import Home from './Home';
import './App.css';

const GlobalStyle = createGlobalStyle`
  body {
    display: block;
    background: #e4e4e4;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Route path="/" exact={true} component={Home} />
    </div>
  );
}

export default App;
