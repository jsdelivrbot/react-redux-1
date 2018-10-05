//Example of class based component
import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        //Calling parent method
        super(props);

        this.state = { term: '' };
    }
    
    render () {
        return (
            <div className="search-bar">
                <input 
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }

}

export default SearchBar;