import {GET_BOOKS} from '../actions/index';
import {APPLY_FILTER} from '../actions/index';

const INITIAL_STATE = { all: [] };

export default function(state = INITIAL_STATE, action){
	
	switch (action.type){

		case GET_BOOKS:			
			return {...state, all: action.payload.data}; //the same as state.concat([action.payload.data]);		
	}

	return state;
}
