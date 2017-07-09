import GET_BOOKS from '../actions/index';

const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action){
	
	switch (action.type){

		case GET_BOOKS:
		return [ action.payload.data, ...state] //the same as state.concat([action.payload.data]);
	}

	return state;
}