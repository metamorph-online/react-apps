import React, {Component} from 'react';
import Facebook from './facebook';


export default class LoginBox extends Component{	

	render(){
        return (
            <div className="row">
            	<div className="col-md-12"><Facebook /></div>
            </div>
        );
	}

}