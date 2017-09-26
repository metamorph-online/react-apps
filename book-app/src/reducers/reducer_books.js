import {GET_BOOKS} from '../actions/index';
import {APPLY_FILTER} from '../actions/index';

const INITIAL_STATE = { all: [] };

export default function(state = INITIAL_STATE, action){
	
	switch (action.type){

		case GET_BOOKS:			
			return {...state, all: action.payload.data}; //the same as state.concat([action.payload.data]);

		case APPLY_FILTER:

			var arr

			if(action.payload == 2){  
				arr = state.all.books.sort(function(a, b) {
				    var textA = a.name.toUpperCase();
				    var textB = b.name.toUpperCase();
				    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
				});
			}

			return{
				...state, all: arr
			}
	}

	return state;
}
