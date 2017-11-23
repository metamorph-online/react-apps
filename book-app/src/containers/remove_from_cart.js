/* button component adds to  Shopping Cart clikced book*/

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {OutCart} from '../actions/index';

class RemoveFromCart extends Component{

	constructor(props){
		super(props);
	}


	removeFromCart(){
		this.props.OutCart(this.props.cart, this.props.book);
	}
	

	render(){		

		return(
			<div className="col-md-6">
				<button className="btn btn-danger" onClick={this.removeFromCart.bind(this)}>Remove</button>
			</div>			
		)
	}
}

function mapStateToProps(state){

	return {
		cart: state.cart.cart
	}
}

export default connect(mapStateToProps, {OutCart})(RemoveFromCart);