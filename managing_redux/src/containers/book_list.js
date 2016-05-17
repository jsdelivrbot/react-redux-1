import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook} from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

	//An action is just an object that flows through the reducers

	renderList() {
		return this.props.books.map((book) => {

			return(
				<li 
					onClick={() => this.props.selectBook(book)}
					key={book.title} 
					className="list-group-item">
					{book.title}
				</li>
			);
		});
	}

	render() {
		return(
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
	}

}

//By using connect, whenever
function mapStateToProps(state) {
	//Whatever is returned will show up
	//as props inside of BookList

	return {
		books: state.books
	};
}

//Anything returned from this function will end up as props
//on the BookList container
function mapDispatchToProps(dispatch) {
	//Whenever selectBook is called, the result should be passed
	//to all of our reducers

	//the purpose of bindActionCreators is to bind actions with reducers
	return bindActionCreators({selectBook: selectBook }, dispatch);
}

//export the container, not the component
//Promote BookList from a component to a container - it needs to know 
//about this new dispatch method, selectBook. Make it available
//as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList); 

///A container is react component that has a direct connection to the state produced by Redux
//React-redux enables the two frame works

//Containers are sometimes refer to smart components in Redux docs

//Only create containers out of components that care about a piece of state

//Only the most parent component that care about state needs to be connected to Redux

//Whenever we forge a connection between react and redux we turn the component into a container