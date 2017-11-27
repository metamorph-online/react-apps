/* component renders list of books in the shopping cart */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import RemoveFromCart from './remove_from_cart';
import {getlocalStorageCart} from '../actions/index';
import {writeToStorage, readFromStorage} from '../components/localStorage';


class ShoppingCart extends Component{

	constructor(props){
		super(props);

		//try to get shopping cart from localStorage
		this.props.getlocalStorageCart();
	}



	/* get the cart total */
	totalCart(){



		let total = 0;
		for(var i=0; i<this.props.cart.length; i++){
		    total += this.props.cart[i].book.price * this.props.cart[i].quantity;
		}
	
		return total.toFixed(2);
	}

	//rendering shopping cart items
	shoppingCart(){

		//console.log(this.props.cart.length);

		return(
	
			this.props.cart.map(function(item, index){
				
					return(
						<li className="list-group-item" key={index}>
							<div className="row">
								<div className="col-md-12">
									<h4>{item.book.name}</h4>
								</div>
							</div>
							<div className="row">
								<div className="col-md-6 price-middle">
									<div className="row">
										<div className="col-md-12">Price: <strong className="red">$ {item.book.price}</strong></div>
									</div>
									<div className="row">
										<div className="col-md-12">Quantity: <strong>{item.quantity}</strong></div>
									</div>
								</div>
								<RemoveFromCart book={item.book}></RemoveFromCart>
							</div>
									
						</li>
					); 
		
			}) 
		);
	}

	render(){

		//console.log(this.props.cart);

		//cart has state values
		if(this.props.cart !== undefined && this.props.cart.length > 0){

			return(
					<div className="row">
						<div className="col-md-12">
							<div className="shopping-cart">
								<ul className="list-group">
									<li className="list-group-item active"><h5>Shopping Cart</h5></li>
									{this.shoppingCart()}
									<li className="list-group-item">Total: $ {this.totalCart()}</li>
								</ul>				
							</div>
						</div>
					</div>
				);
			} else {

				//cart is empty
				return(
					<div className="row">
						<div className="col-md-12">
							<div className="shopping-cart">
								<ul className="list-group">
									<li className="list-group-item active"><h5>Shopping Cart</h5></li>
									<li className="list-group-item ">Your Cart is Empty</li>
									<li className="list-group-item">Total: $ 0</li>
								</ul>				
							</div>
						</div>
					</div>
				);

			}
		}

}

function mapStateToProps(state){

	//console.log(state);
	return {
		cart: state.cart.cart
	}
	
}

export default connect(mapStateToProps, {getlocalStorageCart})(ShoppingCart);
