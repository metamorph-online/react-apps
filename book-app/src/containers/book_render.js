import React, {Component} from 'react';
import {connect} from 'react-redux';

class PostRender extends Component{

	postList(PostData){
		//console.log(PostData);
		return(
			PostData.data.map(function(post){
				return(
					<div className="row marg20">
						<div className="col-md-1 text-center">{post.id}</div>
						<div className="col-md-10">
							<h3 className="title">{post.title}</h3>
							{post.body}
						</div>
						<div className="col-md-1">User: {post.userId}</div>
					</div>
				);
			})
		);
	}

	render(){
		return(
			<div>{this.props.post.map(this.postList)}</div>
		);
	}
}

function mapSateToProps(state){
	console.log(state);
	return {post: state.getPostData}
}

export default connect(mapSateToProps)(PostRender)