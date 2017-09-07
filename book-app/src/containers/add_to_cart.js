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
		this.props.ToCart(this.props.book);
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

	return{}
}

export default connect(mapStateToProps, {ToCart})(AddToCart);