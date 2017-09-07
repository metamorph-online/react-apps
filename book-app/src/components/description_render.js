//component that used to render html from string 

import React, {Component} from 'react';
import renderHTML from 'react-render-html';


//book description slide up/down
export default class BookDescription extends Component{

	constructor(props){
		super(props);
		this.state = {isToggleOn: true};
		// This binding is necessary to make `this` work in the callback
    	this.handleViewClick = this.handleViewClick.bind(this);
	}

	handleViewClick(){

		this.setState(prevState => ({
	        isToggleOn: !prevState.isToggleOn
	    }));
	}


	render(){

		return(
		<div>
			<strong>Description:</strong> <div className={this.state.isToggleOn ? 'description-frame closed' : 'description-frame'}>{renderHTML(this.props.description)}</div><div className="view-all" onClick={this.handleViewClick}>{this.state.isToggleOn ? 'View All' : 'Close'}</div>
		</div>
		)
	}

}