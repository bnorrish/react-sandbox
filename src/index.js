import React from 'react';
import ReactDOM from 'react-dom';
import GameOfLifeContainer from './GameOfLifeContainer.js'

ReactDOM.render(
  <GameOfLifeContainer />,
  document.getElementById('app')
);

module.hot.accept();
