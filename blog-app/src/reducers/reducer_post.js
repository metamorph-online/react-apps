import {GET_POSTS_DATA} from '../actions/index';

export default function(state = [], action){
	//console.log(action);
	switch (action.type){

		case GET_POSTS_DATA:
		return [action.payload, ...state] //the same as state.concat([action.payload]);
	}

	return state;
}