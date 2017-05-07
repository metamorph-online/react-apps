import GET_DATA from '../actions/index';

export default function(state = [], action){
	switch (action.type){

		case GET_DATA:
		return [ action.payload.data, ...state] //the same as state.concat([action.payload.data]);
	}

	return state;
}