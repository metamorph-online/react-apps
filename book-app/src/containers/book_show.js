/* dispayed book page with all the info from server */

import React, {Component} from 'react';
import {fetchBook} from '../actions/index';
import {connect} from 'react-redux';
import AddToCart from '../containers/add_to_cart';
import Preloader from '../components/preloader';
import renderHTML from 'react-render-html'; //for description generate
import {Link} from 'react-router';
import Facebook from './facebook';
import CommentForm from './comment_form';

export class BookShow extends Component{

	constructor(props){
		super(props);
		/* getting of book with the action creator */
		this.props.fetchBook(this.props.params.id);
	}

	renderBook(){
		return(
			<div>
				<div className="row"><div className="col-md-12 breadcrumbs"><Link to={"/"}>Home</Link> > {this.props.book.name}</div></div>
				<ul className="list-group">
					<li key={this.props.book.id} className="list-group-item">
									
						<div className="cover-img"><img src={this.props.book.cover_img} alt="" className="img-responsive" /></div>

							<div className="book-info">
								<ul className="list-group">
									<li className="list-group-item active"><h4>Name: {this.props.book.name} </h4></li>
									<li className="list-group-item"><strong>Author:</strong> {this.props.book.author}</li>
									<li className="list-group-item"><strong>Book ID:</strong> {this.props.book.id}</li>
									<li className="list-group-item"><strong>Genre:</strong> {this.props.book.genre_s}</li>
									<li className="list-group-item"><strong>Pages:</strong> {this.props.book.pages_i}</li>
									<li className="list-group-item"><strong>In Stock:</strong> {this.props.book.inStock ? 'Yes' : 'No'}</li>
									<li className="list-group-item"><strong>Price:</strong> ${this.props.book.price}</li>
									<li className="list-group-item">{renderHTML(this.props.book.description)}</li>
									<li className="list-group-item"><AddToCart book={this.props.book}></AddToCart></li>
								</ul>
							</div>
									
					</li>
				
				</ul>

				<div className="row">{/* comments here */}</div>

				<div className="row">
					<div className="fb-login-box"><Facebook></Facebook></div>
				</div>

				<div className="row">
					<div className="ocol-md-12">
						<CommentForm book_id={this.props.params.id}></CommentForm>
					</div>
				</div>
			</div>
		)
	}

	render(){

		if(!this.props.book){
			return( 
				<Preloader />
			)
		} else {
			return(
				<div>{this.renderBook()}</div>
			)
		}		
		
	}
}

function mapStateToProps(state){
	
	return {
		book: state.book.book
	}
	
}

export default connect(mapStateToProps, {fetchBook})(BookShow);