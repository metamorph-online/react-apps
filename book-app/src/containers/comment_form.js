//component is used to add comments to the db

import React, {Component} from 'react';

export default class CommentForm extends Component{

	constructor(props){
		super(props);

		this.state = {
			title: '',
			comment: ''
		}
	}

	onReset(){

		this.setState({
			title: '',
			comment: ''
		})
	}

	onInputChange(e){
		console.log(e.target.name);
		this.setState({ [e.target.name]: e.target.value})
	}

	render(){

		return(
			<div className="comment-form-box">
				<form>
					<div className="form-group">
						<input type="text" name="title" onChange={ (e) =>  this.onInputChange(e)} value={this.state.title} className="form-control" placeholder="Comment title" />
					</div>
					<div className="form-group">
						<textarea className="form-control" name="comment" onChange={ (e) =>  this.onInputChange(e)} value={this.state.comment} rows="3" placeholder="Comment"></textarea>
					</div>
					<div className="form-group">
						<button  type="submit" className="btn btn-success">Submit</button>
						<button  type="button" className="btn btn-danger" onClick={ () => {this.onReset()} }>Reset</button>
					</div>
				</form>				
			</div>
		)
	}
}