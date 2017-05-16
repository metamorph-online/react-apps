import axios from 'axios';

export const GET_POSTS_DATA = 'GET_POSTS_DATA';

export function getPostsData() {
	const url = `https://jsonplaceholder.typicode.com/posts`;

	const request = axios.get(url);
	console.log(request);

	return{
		type: GET_POSTS_DATA,
		payload: request
	}
}