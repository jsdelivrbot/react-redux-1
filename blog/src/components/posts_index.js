import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';

//Lifecycle methods is a function on a React component class that is automatically being called
class PostsIndex extends Component {

	componentWillMount() {
		this.props.fetchPosts();
	}

	render() {
		return(
			<div>List of blog Posts</div>
		);
	}
}


///////////////////////////////SHORTCUT, VVVVVVVVVV instead of using mapDispatchToProps
export default connect(null, { fetchPosts })(PostsIndex);