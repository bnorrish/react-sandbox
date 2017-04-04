import React from 'react';

export default class Greeting extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render () {

    var nameList = this.props.names.map(function(name) {
      return <div key={name}>{name}</div>;
    })

    return <div>{nameList}</div>

  }
}
