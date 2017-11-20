/* button component adds to  Shopping Cart clikced book*/

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ToCart} from '../actions/index';

class AddToCart extends Component{

	constructor(props){
		super(props);

		this.addToCart = this.addToCart.bind(this);
	}


	addToCart(){

		//need to pass added book and cart items to compare if book is already in the cart
		this.props.ToCart(this.props.book, this.props.cart);
	}
	

	render(){		

		return(
			<div className="my-inline-btns">				
				<div className="btn btn-danger" onClick={this.addToCart}>Add To Cart</div>
			</div>			
		)
	}
}

function mapStateToProps(state){

	return{

		cart: state.cart.cart
	}
}

export default connect(mapStateToProps, {ToCart})(AddToCart);