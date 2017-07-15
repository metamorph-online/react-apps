import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getBooksData} from '../actions/index';

class BooksIndex extends Component{

	constructor(props){
		super(props);
		this.props.getBooksData();
	}

	renderBooks(){
		return(

		<div>
			<h3>List of available books</h3>

			<ul class="list-group">
				{this.props.books.map((book)=>{

					return (
						<li key={book.id} className="list-group-item">							
								<ul class="list-group">
									<li className="list-group-item active"><h4>Name: {book.name} </h4></li>
									<li className="list-group-item">Pages: {book.pages_i}</li>
									<li className="list-group-item">Genre: {book.genre_s}</li>
									<li className="list-group-item">Price: {book.price}</li>
									<li className="list-group-item">Series: {book.series_t}</li>
								</ul>
						</li>
					);
				})}
			</ul>
		</div>
		);
	}

	render(){

		console.log(this.props.books);

		let myLoader = <div className="my-loader"><img src="https://cdnjs.cloudflare.com/ajax/libs/timelinejs/2.25/css/loading.gif" alt="" /></div>;



		return(
			<div style={{marginTop: 50 + 'px'}}>
				
				{ this.props.books == undefined ? myLoader : this.renderBooks()}

			</div>			
		)
	}
}

function mapStateToProps(state){

	//console.log(state);
	
	return {
		books: state.books.all.books
	}
	
}

export default connect(mapStateToProps, {getBooksData})(BooksIndex);