import React, {Component} from 'react';


export default class LoginBox extends Component{

	constructor(props){
		super(props);
	}

	render(){

		return(

		<div className="login-box">
			<ul className="list-group">
				<li className="list-group-item active"><h5>Login</h5></li>
				<li className="list-group-item "><input className="form-control" type="text" placeholder="Login" /></li>
				<li className="list-group-item"><input className="form-control" type="Password" placeholder="Password" /></li>
				<li className="list-group-item"><button className="btn btn-success" type="Submit">Login</button></li>
			</ul>
		</div>
		);
	}

}