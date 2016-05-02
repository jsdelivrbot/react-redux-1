<<<<<<< 49e373da1da4b4c593c8a0b69bc00238d85f743f
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
=======
//Example of functional component
// import React from 'react';

// const SearchBar = () => {
// 	return <input/>;
// }

// export default SearchBar;

//Example of Class Based Component
import React from 'react';

class SearchBar extends React.Component {
	

	render () {
		//This will be called by React.component
		//must return some JSX
		return <input />;
>>>>>>> Updated search_bar.js
	}
}

export default SearchBar;