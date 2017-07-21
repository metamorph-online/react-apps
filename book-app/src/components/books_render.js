import React, {Component} from 'react';
import BookDescription from './description_render';
import AddToCart from '../containers/add_to_cart';


export default class RenderBooks extends Component{

	constructor(props){
		super(props);
	}

	render(){

		return(

		<div className="col-md-10">
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
										<li className="list-group-item"><BookDescription description={book.description}></BookDescription></li>
										<li className="list-group-item"><AddToCart book={book}></AddToCart></li>
									</ul>
								</div>
						</li>
					);
				})}
			</ul>
		</div>
		);
	}

}