import React from 'react';
import GameOfLifeControls from "./GameOfLifeControls.js"
import SimulationMap from "./SimulationMap.js"

export default class GameOfLifeContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      gameGrid: []
    }
  }

  initGameGrid(sizeX,sizeY) {
    gameGrid = [];
    for(let x = 0; x < sizeX; x++) {
      gameGrid.push([]);
      for(let y = 0; y < sizeY; y++) {
          gameGrid[x].push(false);
      }
    }
  }

  static size = {x:10, y: 10};





  onResetGame() {
    alert("Container is about to reset the game!")
    console.log(this)
    this.initGameGrid(10,10);
  }

  render () {
    return (
      <div>
        <GameOfLifeControls resetCallback={this.onResetGame}/>
        <SimulationMap />
      </div>
    )
  }
}
