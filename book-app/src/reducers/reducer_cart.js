import {ADD_TO_CART} from '../actions/index';
import {REMOVE_FROM_CART} from '../actions/index';

const CART_INITIAL_STATE = { cart: [] };

export default function(state = CART_INITIAL_STATE, action){
	
	switch (action.type){

		case ADD_TO_CART:			
			return {...state, cart: [...state, action.payload]}; //the same as state.concat([action.payload]);

		case REMOVE_FROM_CART:
			console.log(state);
			return  state.cart.filter(({ id }) => id !== action.payload.id);
	}

	return state;
}