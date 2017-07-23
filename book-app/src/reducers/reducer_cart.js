import {ADD_TO_CART} from '../actions/index';

const CART_INITIAL_STATE = { cart: [] };

export default function(state = CART_INITIAL_STATE, action){
	
	switch (action.type){

		case ADD_TO_CART:			
			return {...state, cart: [...state.cart, action.payload]}; //the same as state.concat([action.payload]);
	}

	return state;
}