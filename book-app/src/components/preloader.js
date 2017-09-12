import React, {Component} from 'react';

export default class Preloader extends Component{
	
	render(){

		return(
			<div className="my-loader"><img src="https://cdnjs.cloudflare.com/ajax/libs/timelinejs/2.25/css/loading.gif" alt="" /></div>
		);
	}
}