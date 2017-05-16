import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getPostsData} from '../actions/index';

class PostButton extends Component{

	constructor(props){
		super(props);

		this.GetPostData = this.GetPostData.bind(this);
	}

	GetPostData(event){
		event.preventDefault();

		//console.log(this.props.getPostsData());
		this.props.getPostsData();
	
	} 

	render(){
		return(
			<div style={{marginTop: 50 + 'px'}}>
					<button className="btn btn-success" onClick={this.GetPostData}>Click Here to Load Posts</button>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({getPostsData}, dispatch);
}

export default connect(null, mapDispatchToProps)(PostButton);