/* component generates list of books on the first load */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getBooksData} from '../actions/index';
import RenderBooks from '../components/books_render';


class BooksIndex extends Component{

	constructor(props){
		super(props);

		/* getting list of books with the action creator */
		this.props.getBooksData();
	}
	

	render(){

		let myLoader = <div className="my-loader"><img src="https://cdnjs.cloudflare.com/ajax/libs/timelinejs/2.25/css/loading.gif" alt="" /></div>;

		return(
			<div className="row">		
				

				{ this.props.books == undefined ? myLoader : <RenderBooks books={this.props.books} />}

			</div>			
		)
	}
}

function mapStateToProps(state){

	return {
		books: state.books.all.books
	}
	
}

export default connect(mapStateToProps, {getBooksData})(BooksIndex);