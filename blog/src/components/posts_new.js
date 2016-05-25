import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
	render(){
		const { fields: { title, categories, content }, handleSubmit } = this.props;


		//if the form is valid handleSubmit will call the action creator this.props.createPost
		return(
			<form onSubmit={handleSubmit(this.props.createPost)}>
				<h3>Create A New Post</h3>
				
				<div className="form-group">
					<label>Title</label>
					<input type="text" className="form-control" {...title} />
				</div>

				<div className="form-group">
					<label>categories</label>
					<input type="text" className="form-control" {...categories} />
				</div>

				<div className="form-group">
					<label>Content</label>
					<textarea className="form-control" {...content}/>
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>

			</form>
		);
	}
}

//form name does not have to match the name of the component, just has to be unique

//connect: first arg is mapStateToProps, 2nd is mapDispatchToProps
//vs.
//reduxForm: 1st arg is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
	form: 'PostsNewForm',
	fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsNew);

//user types something in....record it on application state
// state === {
// 	form {
// 		postsNewForm: {
// 			title:'....',
// 			categories: '......',
// 			content: '........'
// 		}
// 	}
// }