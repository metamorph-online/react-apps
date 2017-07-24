/* component renders list of books in the shopping cart */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import RemoveFromCart from './remove_from_cart';


class ShoppingCart extends Component{

	constructor(props){
		super(props);
	}

	/* get the cart total */
	totalCart(){

		let total = 0;
		for(var i=0; i<this.props.cart.length; i++){
		    total += this.props.cart[i].price;
		}
	
		return total.toFixed(2);
	}

	//rendering shopping cart items
	shoppingCart(){

		return(
			this.props.cart.map(function(book, index){
				console.log(book);
				return(
					<li className="list-group-item" key={index}>
						<div className="row"><div className="col-md-12"><h4>{book.name}</h4></div></div>
						<div className="row"><div className="col-md-6 price-middle">Price: <strong className="red">$ {book.price}</strong></div><RemoveFromCart book={book}></RemoveFromCart></div>
						
					</li>
				);
			})
		);
	}

	render(){

		return(
		<div className="col-md-3">
			<div className="shopping-cart">
				<ul className="list-group">
					<li className="list-group-item active"><h5>Shopping Cart</h5></li>
					this.props.cart ? {this.shoppingCart()} : ''
					<li className="list-group-item">Total: {this.totalCart()}</li>
				</ul>				
			</div>
		</div>
		);
	}
}

function mapStateToProps(state){

	console.log(state);
	return {
		cart: state.cart
	}
	
}

export default connect(mapStateToProps, {})(ShoppingCart);
