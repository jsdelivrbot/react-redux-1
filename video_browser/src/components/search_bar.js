import React, { Component } from 'react';

class SearchBar extends Component {

	constructor(props) {

		//calls parent method Component
		super(props);

		//We only refer to state in the constructor of the subcomponent, nowhere else
		this.state = { term: 'Starting Value' }; 
	}

	render() {
		//we only change state using this.setState, never this.state.term = 5;
		//onChange is always updated first before value is changed
		return ( 
			<div>
				<input 
				value={this.state.term}
				onChange={ event => this.setState({ term: event.target.value })} />
				Value of the input: { this.state.term }
			</div>
		);
	}
}

export default SearchBar;