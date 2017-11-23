import {ADD_TO_CART, REMOVE_FROM_CART, GET_LOCALSTORAGE_CART} from '../actions/index';


const CART_INITIAL_STATE = { cart: []};

export default function(state = CART_INITIAL_STATE, action){


	switch (action.type){

		//get cart from localStorage
		case GET_LOCALSTORAGE_CART:
			return  {...state, cart: action.payload}

		//addig item to cart
		case ADD_TO_CART:
			return  {...state, cart: action.payload}

		//remove item from cart
		case REMOVE_FROM_CART:
			//console.log(action.payload.id);
			return  {...state, cart: action.payload /* state.cart.filter((element) => element.book.id !== action.payload.id) */}
	}

	return state;
}