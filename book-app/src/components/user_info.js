import React, {Component} from 'react';


export default class UserInfo extends Component {

	constructor(props){
		super(props);
	}

	 render(){

	 	//this.doLogout.bind(this)

	 	return(
	 		<div>
	 			<div className="user-img"><img src={this.props.userinfo.picture.data.url} width="60px" /></div>
	 			<div className="user-greeting">Welcome {this.props.userinfo.first_name} {this.props.userinfo.last_name}!</div> 
             	<div className="user-logout"><button onClick={()=>{return null}}>Logout</button></div>
            </div>
	 	);
	 }

}
