import React, { Component } from 'react';
import { Link } from 'react-router';
import ShoppingCart from '../containers/shopping_cart';
import LoginBox from '../containers/login_box';

export default class App extends Component {

  render() {
    return (
      <div className="container my-app">
      		<div className="col-md-3">
      			<LoginBox></LoginBox>
				<ShoppingCart></ShoppingCart>
			</div>
      		<div className="col-md-9">{this.props.children}</div>
      </div>
    );
  }
}
