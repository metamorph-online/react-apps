import {LOGIN, LOGINCHECK, LOGOUT} from '../actions/index';


const USER_INITIAL_STATE = { user: []};

export default function(state = USER_INITIAL_STATE, action){


	switch (action.type){

		//get user data from action
		case LOGIN:
			return  {...state, user: action.payload}

		case LOGOUT:
			return {...state, user: []}
		
	}

	return state;
}