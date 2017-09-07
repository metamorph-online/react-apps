/* dispayed book page with all the info from server */

import React, {Component} from 'react';
import {fetchBook} from '../actions/index';

export default class BookShow extends Component{

	constructor(props){
		super(props);

	}

	render(){

		return(
		<div>
			Book Page
		</div>
		)
	}
}