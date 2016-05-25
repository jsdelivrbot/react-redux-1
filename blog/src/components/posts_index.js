import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import { fetchPosts } from '../actions/index';

//Lifecycle methods is a function on a React component class that is automatically being called
class PostsIndex extends Component {

	componentWillMount() {
		this.props.fetchPosts();
	}

	render() {
		return(
			<div>
				<div className='text-xs-right'>
					<Link to="posts/new" className="btn btn-primary">
					 	Add A Post
					</Link>
				</div>
				List of blogs
			</div>
		);
	}
}


///////////////////////////////SHORTCUT, VVVVVVVVVV instead of using mapDispatchToProps
export default connect(null, { fetchPosts })(PostsIndex);