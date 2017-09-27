import axios from 'axios';

export const GET_BOOKS = 'GET_BOOKS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const GET_BOOK = 'GET_BOOK';
export const APPLY_FILTER = 'APPLY_FILTER';

const ROOT_URL = 'http://localhost:3000';

//get all books from server
export function getBooksData() {

	const request = axios.get(`${ROOT_URL}/db/`);

	return{
		type: GET_BOOKS,
		payload: request
	}
}

//add the book to cart
export function ToCart(book){
	return{
		type: ADD_TO_CART,
		payload: book
	}
}


//remove book from cart
export function OutCart(book){
	return{
		type: REMOVE_FROM_CART,
		payload: book
	}
}

//get book from server by id
export function fetchBook(id){
	const request = axios.get(`${ROOT_URL}/books/${id}`);

	return {
		type: GET_BOOK,
		payload: request
	}
}

