import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {


	//the difference between context and props is that context does not need to be 
	//deliberately passed from parent to child
	//how to access data throughout your application without it being passed explicitly to your component

	//Defining an object on the PostsNew class
	static contextTypes = {
		//Avoid using context as much as possible, the only instance where you'd use it 
		//is when accessing the router
		//React is going to search all parents components until it finds router
		//In this case Router in index.js
		router: PropTypes.object
	}

	onFormSubmit(props) {
		this.props.createPost(props)
			.then(() => {
				//blog post has been created, navigate the user to the index
				//We navigate by calling this.context.router.push with the 
				//new path to navigate to.
				this.context.router.push('/');
			});
	}


	render(){
		const { fields: { title, categories, content }, handleSubmit } = this.props;

		//if the form is valid handleSubmit will call the action creator this.props.createPost
		//this.onFormSubmit.bind(this) is binding the forms props the onSubmit
		return(
			<form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
				<h3>Create A New Post</h3>
				
				<div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
					<label>Title</label>
					<input type="text" className="form-control" {...title} />
					<div className="text-help">
						{title.touched ? title.error : ''}
					</div>
				</div>

				<div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
					<label>Categories</label>
					<input type="text" className="form-control" {...categories} />
					<div className="text-help">
						{categories.touched ? categories.error : ''}
					</div>
				</div>

				<div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
					<label>Content</label>
					<textarea className="form-control" {...content}/>
					<div className="text-help">
						{content.touched ? content.error : ''}
					</div>
				</div>

				<button type="submit" className="btn btn-primary">Save</button>
				<Link to="/" className="btn btn-danger" >Cancel</Link>
			</form>
		);
	}
}

function validate(values) {
	const errors = {};

	if (!values.title) {
		errors.title = 'Enter a title';
	}
	 
	if (!values.categories) {
		errors.categories = 'Enter categories';
	}

	if (!values.content) {
		errors.content = 'Enter some content';
	}

	return errors;
}

//form name does not have to match the name of the component, just has to be unique

//connect: first arg is mapStateToProps, 2nd is mapDispatchToProps
//vs.
//reduxForm: 1st arg is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
	form: 'PostsNewForm',
	fields: ['title', 'categories', 'content'],
	validate
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