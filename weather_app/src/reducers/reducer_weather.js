import { FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {

	switch (action.type) {
		case FETCH_WEATHER:
			//We need to return a new state with the existing data and new data, never use state.push
			//return state.concat([ action.payload.data ]);//Old way but still works
			return [ action.payload.data, ...state ];//New ES6 way
	}

	return state;
}