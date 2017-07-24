import axios from 'axios';

export const GET_BOOKS = 'GET_BOOKS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export function getBooksData() {
	const url = `http://localhost:3000/db/`;

	const request = axios.get(url);

	return{
		type: GET_BOOKS,
		payload: request
	}
}

export function ToCart(book){

	return{
		type: ADD_TO_CART,
		payload: book
	}
}

export function OutCart(book){
	return{
		type: REMOVE_FROM_CART,
		payload: book
	}
}