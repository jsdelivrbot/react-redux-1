//All reducers get two arguments: state, action
//reducers are always called when an action occurs

//State arg is not application state, only the state
//this reducer is responsible for
export default function(state = null, action) {

	switch(action.type) {
		case 'BOOK_SELECTED':
			return action.payload;
	}

	return state;
}