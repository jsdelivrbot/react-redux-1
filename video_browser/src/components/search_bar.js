//Example of functional component
// import React from 'react';

// const SearchBar = () => {
// 	return <input/>;
// }

// export default SearchBar;

//Example of Class Based Component
import React, { Component } from 'react';

class SearchBar extends Component {

	constructor(props) {

		//calls parent method Component
		super(props);

		//We only refer to state in the constructor of the subcomponent, nowhere else
		this.state = { term: '' }; 
	}

	render() {
		//we only change state using this.setState, never this.state.term = 5;
		//onChange is always updated first before value is changed
		return ( 
			<div className="search-bar">
				<input 
				value={this.state.term}
				onChange={ event => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;