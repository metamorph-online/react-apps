import {GET_BOOK} from '../actions/index';

const BOOK_INITIAL_STATE = { book: null };

export default function(state = BOOK_INITIAL_STATE, action){
	
	switch (action.type){

		case GET_BOOK:			
			return {...state, book: action.payload.data};
	}

	return state;
}
