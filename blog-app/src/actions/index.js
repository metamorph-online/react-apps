import axios from 'axios';

export const GET_DATA = 'getPostsData';

export function getPostsData() {
	const url = `https://jsonplaceholder.typicode.com/posts`;

	const request = axios.get(url);
	console.log(request);

	return{
		type: getPostData,
		payload: request
	}
}