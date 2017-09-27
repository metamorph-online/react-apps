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

		this.state = {books: []};


		//if filters change state parent component should update the RenderBooks props
		//filter state, needed to update component on filter update
		var handleToUpdate	= this.handleToUpdate.bind(this);
		this.state = {filterSwitcher: false};
	}

	//check if promise was resolved and assigned to the state
	shouldComponentUpdate(nextProps, nextState) {

	   return this.state.books !== nextProps.books || nextState.filterSwitcher == true;
	}

	//assigns props to state
	componentWillUpdate(nextProps, nextState){
		
		if(nextState.filterSwitcher == false){
			this.setState({books: nextProps.books});
		}

		console.log(nextState);
	} 

	handleToUpdate(someArg){

		var arr = this.state.books;

		if(someArg == 2){  
				arr = arr.sort(function(a, b) {
				    var textA = a.name.toUpperCase();
				    var textB = b.name.toUpperCase();
				    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
				});

			this.setState({books: arr, filterSwitcher: true}, );

		}
	
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