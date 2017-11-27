import React, {Component} from 'react';


export default class UserInfo extends Component {

	constructor(props){
		super(props);
	}

	 render(){

	 	//this.doLogout.bind(this)

	 	return(
	 		<div>
	 			<div className="col-md-4"><img src={this.props.userinfo.picture.data.url} width="80px" /></div>
	 			<div className="col-md-8">Hi {this.props.userinfo.first_name}!</div> 
             	<button onClick={()=>{return null}}>Logout</button>
            </div>
	 	);
	 }

}
