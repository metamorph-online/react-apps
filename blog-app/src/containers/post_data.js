import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getBooksData} from '../actions/index';

class BooksIndex extends Component{

	constructor(props){
		super(props);
		this.props.getBooksData();
	}

	render(){
		return(
			<div style={{marginTop: 50 + 'px'}}>
					
			</div>
		)
	}
}

function mapStateToProps(state){
	
	return {
		books: state.books.all
	}
	
}

export default connect(mapStateToProps, {getBooksData})(BooksIndex);