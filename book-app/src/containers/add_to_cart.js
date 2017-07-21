/* button component adds to  Shopping Cart clikced book*/

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ToCart} from '../actions/index';

class AddToCart extends Component{

	constructor(props){
		super(props);
	}


	addToCart(){
		this.props.ToCart(this.props.book);
	}
	

	render(){		

		return(
			<div>				
				<div className="btn btn-danger" onClick={this.addToCart.bind(this)}>Add To Cart</div>
			</div>			
		)
	}
}

function mapStateToProps(state){

	return{}
}

export default connect(mapStateToProps, {ToCart})(AddToCart);