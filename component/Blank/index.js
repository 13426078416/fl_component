import React from 'react';
export default class Blank extends React.Component {
  render() {
    return(<div className="blank-component" style={{height:`${this.props.height || 10}px`}}></div>)
  }
}
