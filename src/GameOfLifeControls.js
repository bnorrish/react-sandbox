import React from 'react';

export default class GameOfLifeControls extends React.Component {

  constructor(props) {
    super(props);

    this.handleNextStepClick = this.handleNextStepClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  handleNextStepClick() {
    alert("handleNextStepClick")
  };

  handleResetClick() {
    alert("handleResetClick")
    this.props.resetCallback();
  };

  render () {
    return (
      <div>
         <button id='next-step' type="button" onClick={this.handleNextStepClick}>Next Step</button>
         <button id='reset-random' type="button" onClick={this.handleResetClick}>Reset Random</button>
      </div>
    )
  }
}
