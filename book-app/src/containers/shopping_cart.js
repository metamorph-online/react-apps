/* component renders list of books in the shopping cart */

import React, {Component} from 'react';
import {connect} from 'react-redux';


class ShoppingCart extends Component{

	constructor(props){
		super(props);
	}

	shoppingCart(){
		console.log(this.props.cart);
		return(
			this.props.cart.map(function(book){
				return(
					<div className="some">{book.name}</div>
				);
			})
		);
	}

	render(){

		return(
			<div className="col-md-2">
				<h5>Shopping Cart</h5>
				<div>{this.shoppingCart()}</div>
			</div>
		);
	}
}

function mapStateToProps(state){

	//console.log(state.cart.cart);

	return {
		cart: state.cart.cart
	}
	
}

export default connect(mapStateToProps, {})(ShoppingCart);
