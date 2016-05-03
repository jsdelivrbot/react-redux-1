//Go and find this in node_modules
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyBKl9ovXZDzEa7b1CNYXrZ2ZAQ-jxw5WOY';

//Downward data flow, only the most parent component should be responsible for fetching data

//=> is used instead of function
class App extends Component {

	constructor(props) {
		//passes props to Component
		super(props);

		this.state = { videos: [] };

		YTSearch({ key: API_KEY, term: 'surfboards'}, (videos) => {
			//In ES6 if the key and the property are the same variable name 
			//you can condense them into on var
			this.setState({ videos });
		});
	}

	render() {

		//When using a class component versus a functional one, you 
		//call props by writing: this.props, in a functional component use just: props

		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

ReactDom.render(<App />, document.querySelector('.container'));

//2 types of components
// 1) Functional Component - The component is literally a function, some info goes in, JSX comes out
// 2) Class Based Component - Used when we want some type of internal record keeping; state