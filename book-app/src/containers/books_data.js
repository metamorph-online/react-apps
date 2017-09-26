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

		//filter state, needed to update component on filter update
		var handleToUpdate	= this.handleToUpdate.bind(this);

		this.state = {filterSwitcher: true};
	}

	handleToUpdate(someArg){
		this.setState({filterSwitcher: someArg});
		console.log('state updated');
	}
	

	render(){		

		return(
			<div className="row">

				{/* sortig component */}
				<SortFilters handleToUpdate = {this.handleToUpdate.bind(this)}></SortFilters>
				

				{ this.props.books == undefined ? <Preloader /> : <RenderBooks books={this.props.books} />}

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