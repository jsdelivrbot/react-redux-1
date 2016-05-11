import React, { Component } from React;
import { connect } from 'react-redux';

class BookList extends Component {

	renderList() {
		return this.props.books.map((book) => {
			return(
				<li key="{book.title}" className="list-group-item">{book.title}</li>
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

//export the container, not the component
export default connect(mapStateToProps)(BookList); 

///A container is react component that has a direct connection to the state produced by Redux
//React-redux enables the two frame works

//Containers are sometimes refer to smart components in Redux docs

//Only create containers out of components that care about a piece of state

//Only the most parent component that care about state needs to be connected to Redux

//Whenever we forge a connection between react and redux we turn the component into a container