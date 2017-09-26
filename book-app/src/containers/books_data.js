/* component generates list of books on the first load */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getBooksData} from '../actions/index';
import {filterApplied} from '../actions/index';
import RenderBooks from '../components/books_render';
import Preloader from '../components/preloader';
import SortFilters from './sort_filters';


class BooksIndex extends Component{

	constructor(props){
		super(props);

		/* getting list of books with the action creator */
		this.props.getBooksData();

		this.state = {books: this.props.books};


		//if filters change state parent component should update the RenderBooks props
		//filter state, needed to update component on filter update
		var handleToUpdate	= this.handleToUpdate.bind(this);
		this.state = {filterSwitcher: true};
	}

	componentWillReceiveProps(){
		this.setState({books: this.props.books});
		console.log(this.state);
	}

	handleToUpdate(someArg){
		this.setState({filterSwitcher: someArg});
		this.setState({books: this.props.books});
		console.log(this.props.books);
	}
	


	render(){		

		return(
			<div className="row">

				{/* sortig component */}
				<SortFilters handleToUpdate = {this.handleToUpdate.bind(this)}></SortFilters>

				{ this.state.books == undefined ? <Preloader /> : <RenderBooks books={this.state.books} />}

			</div>			
		)
	}
}

function mapStateToProps(state){

	return {
		books: state.books.all.books
	}
	
}

export default connect(mapStateToProps, {getBooksData})(BooksIndex);