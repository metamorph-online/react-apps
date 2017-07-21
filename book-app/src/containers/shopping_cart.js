/* component renders list of books in the shopping cart */

import React, {Component} from 'react';
import {connect} from 'react-redux';


class ShoppingCart extends Component{

	constructor(props){
		super(props);
	}

	render(){

		return(
			<div className="col-md-2"><h5>Shopping Cart</h5></div>
		);
	}
}

function mapStateToProps(state){

	return {
		
	}
	
}

export default connect(mapStateToProps, {})(ShoppingCart);
