import {ADD_TO_CART} from '../actions/index';
import {REMOVE_FROM_CART} from '../actions/index';

const CART_INITIAL_STATE =  [] ;

export default function(state = CART_INITIAL_STATE, action){
	
	switch (action.type){

		case ADD_TO_CART:
			let newBook = {book: action.payload, quantity: 1};
			console.log(state);		
			return  state.concat([newBook]);//[...state.cart, action.payload]; //the same as state.concat([action.payload]);

		case REMOVE_FROM_CART:
			console.log(state.book);
			return  state.cart.filter(item => item.book.id !== action.payload.id);
	}

	return state;
}