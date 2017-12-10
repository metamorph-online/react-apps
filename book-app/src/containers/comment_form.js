//component is used to add comments to the db
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {AddComment} from '../actions/index';

class CommentForm extends Component{

	constructor(props){
		super(props);

		this.state = {
			title: '',
			comment: '',
			message:''
		}
	}

	onReset(){

		this.setState({
			title: '',
			comment: ''
		})
	}

	submitHandler(e){
		e.preventDefault();

		let bookID = this.props.book_id,
			myComment = JSON.stringify( {
				title : this.state.title,
				comment : this.state.comment
			});

		
		this.props.AddComment(bookID, myComment);

	}

	onInputChange(e){
		this.setState({ [e.target.name]: e.target.value})
	}

	render(){

		return(
			<div className="comment-form-box">
				<div>{this.state.message}</div>
				<form>
					<div className="form-group">
						<input type="text" name="title" onChange={ (e) =>  this.onInputChange(e)} value={this.state.title} className="form-control" placeholder="Comment title" />
					</div>
					<div className="form-group">
						<textarea className="form-control" name="comment" onChange={ (e) =>  this.onInputChange(e)} value={this.state.comment} rows="3" placeholder="Comment"></textarea>
					</div>
					<div className="form-group">
						<button  type="submit" className="btn btn-success" onClick={(e)=> this.submitHandler(e)}>Submit</button>
						<button  type="button" className="btn btn-danger" onClick={ () => {this.onReset()} }>Reset</button>
					</div>
				</form>				
			</div>
		)
	}
}

function mapStateToProps(state){
	
	return {
		book: state.book.book
	}
	
}

export default connect(mapStateToProps, {AddComment})(CommentForm);