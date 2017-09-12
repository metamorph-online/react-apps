/* component generates list of books on the first load */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getBooksData} from '../actions/index';
import RenderBooks from '../components/books_render';
import Preloader from '../components/preloader';


class BooksIndex extends Component{

	constructor(props){
		super(props);

		/* getting list of books with the action creator */
		this.props.getBooksData();
	}
	

	render(){

		

		return(
			<div className="row">		
				

				{ this.props.books == undefined ? <Preloader /> : <RenderBooks books={this.props.books} />}

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