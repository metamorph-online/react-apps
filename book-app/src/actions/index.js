import axios from 'axios';

export const GET_BOOKS = 'GET_BOOKS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const GET_BOOK = 'GET_BOOK';


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
export function ToCart(book, shopping_cart){

	console.log(shopping_cart);

	//check if shopping cart is not empty
	if(shopping_cart.length > 0){	

		var bookExists = 0;

		var new_shopping_cart = [];

		//check if book exists in shopping cart
		shopping_cart.map((item) => {

			if(book.id == item.book.id){ 

				item.quantity++; // increase quantity by one if book exists 
				bookExists = 1; //variable check if book was found in the array
							
			}

			new_shopping_cart.push(item); //add item to the new shopping cart array
		});


		//if book was found in the check we need to send new shopping cart array
		if(bookExists == 1){

			return{
				type: ADD_TO_CART,
				payload: new_shopping_cart
			}

		} 
			else // if book was not found in the shopping cart array we add the book to the end of the old shopping cart array
		{

			return{
				type: ADD_TO_CART,
				payload: shopping_cart.concat({book, quantity: 1})
			}

		}

		
	} else {

		//add first book if cart is empty
		return{
			type: ADD_TO_CART,
			payload: shopping_cart.concat({book, quantity: 1})
		}

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

