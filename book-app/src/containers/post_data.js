import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getBooksData} from '../actions/index';
import renderHTML from 'react-render-html';

class BooksIndex extends Component{

	constructor(props){
		super(props);
		this.props.getBooksData();
	}

	
	renderBooks(){
		return(

		<div>
			<h3>List of available books</h3>

			<ul className="list-group">
				{this.props.books.map((book)=>{

					return (
						<li key={book.id} className="list-group-item">

								<div className="cover-img"><img src={book.cover_img} alt="" className="img-responsive" /></div>

								<div className="book-info">
									<ul className="list-group">
										<li className="list-group-item active"><h4>Name: {book.name} </h4></li>
										<li className="list-group-item">Pages: {book.pages_i}</li>
										<li className="list-group-item">Genre: {book.genre_s}</li>
										<li className="list-group-item">Price: {book.price}</li>
										<li className="list-group-item">Description: <div className="description-frame">{renderHTML(book.description)}</div><div className="view-all" onClick={this.descriptionChange.bind(this)}>View All</div></li>
									</ul>
								</div>
						</li>
					);
				})}
			</ul>
		</div>
		);
	}

	render(){

		let myLoader = <div className="my-loader"><img src="https://cdnjs.cloudflare.com/ajax/libs/timelinejs/2.25/css/loading.gif" alt="" /></div>;

		return(
			<div style={{marginTop: 50 + 'px'}}>
				
				{ this.props.books == undefined ? myLoader : this.renderBooks()}

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