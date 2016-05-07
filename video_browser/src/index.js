//Go and find this in node_modules
import React, { Component } from 'react';
import _ from 'lodash';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBKl9ovXZDzEa7b1CNYXrZ2ZAQ-jxw5WOY';

//Downward data flow, only the most parent component should be responsible for fetching data

//=> is used instead of function
class App extends Component {

    constructor(props) {
        //passes props to Component
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            //In ES6 if the key and the property are the same variable name 
            //you can condense them into on var
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {

    	const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);

        //When using a class component versus a functional one, you 
        //call props by writing: this.props, in a functional component use just: props

        return ( 
        	<div>
	            <SearchBar onSearchTermChange={videoSearch}/>
	            <VideoDetail video = { this.state.selectedVideo }/> 
	            <VideoList 
	            videos = { this.state.videos }
	            onVideoSelect = { selectedVideo => this.setState({ selectedVideo }) }/> 
            </div>
        );
    }
}

ReactDom.render( < App / > , document.querySelector('.container'));

//2 types of components
// 1) Functional Component - The component is literally a function, some info goes in, JSX comes out
// 2) Class Based Component - Used when we want some type of internal record keeping; state
