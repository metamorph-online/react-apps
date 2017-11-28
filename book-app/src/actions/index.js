import axios from 'axios';

import {writeToStorage, readFromStorage} from '../components/localStorage';

export const GET_BOOKS = 'GET_BOOKS';   //get the books from db
export const ADD_TO_CART = 'ADD_TO_CART';  //add book to cart
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';  //remove book from cart
export const GET_BOOK = 'GET_BOOK'; //get book info for the book page
export const GET_LOCALSTORAGE_CART = 'GET_LOCALSTORAGE_CART'; //get cart from localStorage
export const LOGIN = 'LOGIN';  //get the login state
export const LOGINCHECK = 'LOGINCHECK';  //check if user is logged in
export const LOGOUT = 'LOGOUT'; //logout user from facebook



const ROOT_URL = 'http://localhost:3000';

//promises object for login
const promises = {

	    init: () => {
	        return new Promise((resolve, reject) => {
	            if (typeof FB !== 'undefined') {
	                resolve();
	            } else {
	                window.fbAsyncInit = () => {
	                    FB.init({
	                        appId      : '153646268585020',
	                        cookie     : true, 
	                        xfbml      : true,  
	                        version    : 'v2.5'
	                    });
	                    resolve();
	                };
	                (function(d, s, id) {
	                    var js, fjs = d.getElementsByTagName(s)[0];
	                    if (d.getElementById(id)) return;
	                    js = d.createElement(s); js.id = id;
	                    js.src = "//connect.facebook.net/en_US/sdk.js";
	                    fjs.parentNode.insertBefore(js, fjs);
	                }(document, 'script', 'facebook-jssdk'));
	            }
	        });
	    },
	    checkLoginState: () => {
	        return new Promise((resolve, reject) => {
	            FB.getLoginStatus((response) => {
	                response.status === 'connected' ? resolve(response) : reject(response);
	            });
	        });
	    },
	    login: () => {
	        return new Promise((resolve, reject) => {
	            FB.login((response) => {
	                response.status === 'connected' ? resolve(response) : reject(response);
	            });
	        });
	    },
	    logout: () => {
	        return new Promise((resolve, reject) => {
	            FB.logout((response) => {
	                response.authResponse ? resolve(response) : reject(response);
	            });
	        });
	    },
	    fetch: () => {
	        return new Promise((resolve, reject) => {
	            FB.api(
	                '/me',
	                {fields: 'first_name, last_name, gender, picture.type(square).width(100).height(100)'},
	                response => response.error ? reject(response) : resolve(response)
	            );
	        });
	    }
	}



//get localStorage Cart 
export function getlocalStorageCart() {

	let myValue = [];

	if(readFromStorage('cart') != undefined){

		myValue = readFromStorage('cart');
	}

	return{
		type: GET_LOCALSTORAGE_CART,
		payload: myValue
	}
}


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

			//writing the new shopping cart to localStorage
			writeToStorage(new_shopping_cart, 'cart');

			return{
				type: ADD_TO_CART,
				payload: new_shopping_cart
			}

		} 
			else // if book was not found in the shopping cart array we add the book to the end of the old shopping cart array
		{

			let cart_new_book = shopping_cart.concat({book, quantity: 1});

			//writing the new shopping cart to localStorage
			writeToStorage(cart_new_book, 'cart');

			return{
				type: ADD_TO_CART,
				payload: cart_new_book
			}

		}

		
	} else {

		let cart_new_book = shopping_cart.concat({book, quantity: 1});

		//writing the new shopping cart to localStorage
		writeToStorage(cart_new_book, 'cart');

		//add first book if cart is empty
		return{
			type: ADD_TO_CART,
			payload: cart_new_book
		}

	}
}


//remove book from cart
export function OutCart(arr, book){

	arr = arr.filter((element) => element.book.id !== book.id);

	//writing the new shopping cart to localStorage
	writeToStorage(arr, 'cart');

	return{
		type: REMOVE_FROM_CART,
		payload: arr
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


//get the facebook login
export function fbLogIn(){

	let response =  promises.init()
        .then(
            promises.login,
            error => { throw error; },
            console.log('login')
        )
        .then(
            response = promises.fetch,
            error => { throw error; },
            console.log('fetch user')
        )
        .catch((error) => { 
            console.warn(error); 
        });

    console.log(response);

    return {
		type: LOGIN,
	    payload: response
	}

}

//check if user is logged in
export function fbLoginStatusCheck(){

	let response = '';

	promises.init()
        .then(
            promises.checkLoginState,
            error => { throw error; }
        )        
        .then(
            response = promises.fetch,
            error => { throw error; }
        )        
        .catch((error) => { 
            console.warn(error); 
    });

    return {
		type: LOGINCHECK,
		payload: response
	}
}

//get the facebook logout
export function fbLogOut(){

	let response = 'logout';

	promises.init()

        .then(
         	promises.checkLoginState,
        	error => { throw error; }
        )
        .then(
            promises.logout,
            error => { throw error; }
        )
        
        .catch(error => { 
            console.warn(error); 
    });

    return {
		type: LOGOUT,
		payload: response
	}
}

