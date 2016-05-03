//Go and find this in node_modules
import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBKl9ovXZDzEa7b1CNYXrZ2ZAQ-jxw5WOY';

//=> is used instead of function
const App = () => {
	return <SearchBar />;

}

ReactDom.render(<App />, document.querySelector('.container'));