import axios from 'axios';

export const GET_BOOKS = 'GET_BOOKS';

export function getBooksData() {
	const url = `http://localhost:3000/books/`;

	const request = axios.get(url);
	console.log(request);

	return{
		type: GET_BOOKS,
		payload: request
	}
}