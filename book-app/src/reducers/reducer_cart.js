import {ADD_TO_CART} from '../actions/index';
import {REMOVE_FROM_CART} from '../actions/index';

const CART_INITIAL_STATE = { cart: []};

export default function(state = CART_INITIAL_STATE, action){


	switch (action.type){

		//addig item to cart
		case ADD_TO_CART:
			let newBook = {book: action.payload, quantity: 1};
			return  {...state, cart: state.cart.concat(newBook)}

		//remove item from cart
		case REMOVE_FROM_CART:
			//console.log(action.payload.id);
			return  {...state, cart: state.cart.filter((element) => element.book.id !== action.payload.id)}
	}

	return state;
}