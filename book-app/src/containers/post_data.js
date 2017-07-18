import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getBooksData} from '../actions/index';
import RenderBooks from '../components/book_render';

class BooksIndex extends Component{

	constructor(props){
		super(props);
		this.props.getBooksData();
	}
	

	render(){

		let myLoader = <div className="my-loader"><img src="https://cdnjs.cloudflare.com/ajax/libs/timelinejs/2.25/css/loading.gif" alt="" /></div>;

		return(
			<div style={{marginTop: 50 + 'px'}}>
				
				{ this.props.books == undefined ? myLoader : <RenderBooks books={this.props.books} />/* this.renderBooks()*/}

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