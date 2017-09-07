import React, {Component} from 'react';
import BookDescription from './description_render';
import AddToCart from '../containers/add_to_cart';
import {Link} from 'react-router';


export default class RenderBooks extends Component{

	constructor(props){
		super(props);
	}

	render(){

		return(

		<div className="books-list">
			<h3>List of available books</h3>

			<ul className="list-group">
				{this.props.books.map((book)=>{

					return (
						<li key={book.id} className="list-group-item">
								
								<div className="cover-img"><img src={book.cover_img} alt="" className="img-responsive" /></div>

								<div className="book-info">
									<ul className="list-group">
										<li className="list-group-item active"><Link to={"book/" + book.id} className="title"><h4>Name: {book.name} </h4></Link></li>
										<li className="list-group-item"><strong>Genre:</strong> {book.genre_s}</li>
										<li className="list-group-item"><strong>Price:</strong> ${book.price}</li>
										<li className="list-group-item"><BookDescription description={book.description}></BookDescription></li>
										<li className="list-group-item"><AddToCart book={book}></AddToCart> <Link to={"book/" + book.id} className="title"><div className="btn btn-success my-inline-btns">More info...</div></Link></li>
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