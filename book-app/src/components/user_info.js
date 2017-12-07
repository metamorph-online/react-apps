import React, {Component} from 'react';


export default class UserInfo extends Component {

	constructor(props){
		super(props);
	}

	handleLogout(){

		this.props.userLogout()

	}

	 render(){

	 	//this.doLogout.bind(this)

	 	return(
	 		<div>
	 			<div className="user-img"><img src={this.props.userinfo.picture.data.url} width="60px" /></div>
	 			<div className="user-info">
	 				<div className="user-greeting">{this.props.userinfo.first_name} {this.props.userinfo.last_name}!</div> 
             		<div className="user-logout"><button onClick={this.handleLogout.bind(this)}>Logout</button></div>
	 			</div>	 			
            </div>
	 	);
	 }

}
