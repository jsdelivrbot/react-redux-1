import React from 'react';
import { Component } from 'react';

export default class App extends Component {
	//this.props.children is required in order to render the children in the parent App
  render() {
    return (
      <div>
      	{this.props.children}
      </div>
    );
  }
}
