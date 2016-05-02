//Go and find this in node_modules
import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBKl9ovXZDzEa7b1CNYXrZ2ZAQ-jxw5WOY';

//=> is used instead of function
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

ReactDom.render(<App />, document.querySelector('.container'));

//2 types of components
// 1) Functional Component - The component is literally a function, some info goes in, JSX comes out
// 2) Class Based Component - Used when we want some type of internal record keeping; state