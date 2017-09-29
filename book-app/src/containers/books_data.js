/* component generates list of books on the first load */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getBooksData} from '../actions/index';
import {filterApplied} from '../actions/index';
import RenderBooks from '../components/books_render';
import Preloader from '../components/preloader';
import SortFilters from '../components/sort_filters';


class BooksIndex extends Component{

	constructor(props){
		super(props);

		/* getting list of books with the action creator */
		this.props.getBooksData();

		this.state = {books: []};


		//if filters change state parent component should update the RenderBooks props
		//filter state, needed to update component on filter update
		var handleToUpdate	= this.handleToUpdate.bind(this);
		this.state = {stateSwitcher: false, searchResults: ''};

		var visible = false;

	}

	//check if promise was resolved and assigned to the state
	shouldComponentUpdate(nextProps, nextState) {

	   return this.state.books !== nextProps.books || nextState.stateSwitcher !== this.state.stateSwitcher;
	}

	//assigns props to state
	componentWillUpdate(nextProps, nextState){		
		
		this.setState({books: nextProps.books});
	}

	//take care of state change after filter applied
	filterSetState(arr){
		this.setState(prevState => ({
	        stateSwitcher: !prevState.stateSwitcher,
	        books: arr
	    }));
	}

	//filter array by book title
	filterByTitle(){

		var arr = this.state.books;
		arr = arr.sort(function(a, b) {
			  var textA = a.name.toUpperCase();
			  var textB = b.name.toUpperCase();
			  return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
			});

		//set new filtered state
		this.filterSetState(arr);
	}

	//filter array by book price(price from lower to higher)
	filterByPriceUp(){
		var arr = this.state.books;
		arr = arr.sort(function(a, b) {
			  var A = a.price;
			  var B = b.price;
			  return A - B;
			});

		//set new filtered state
		this.filterSetState(arr);
	}

	//filter array by book price(price from higher to lower)
	filterByPriceDown(){
		var arr = this.state.books;
		arr = arr.sort(function(a, b) {
			  var A = a.price;
			  var B = b.price;
			  return B - A;
			});

		//set new filtered state
		this.filterSetState(arr);
	}  

	//filter array by book purchased number
	filterByPopularity(){
		var arr = this.state.books;
		arr = arr.sort(function(a, b) {
			  var A = a.purchased;
			  var B = b.purchased;
			  return B - A;
			});

		//set new filtered state
		this.filterSetState(arr);
	}

	//handles Filter update
	handleToUpdate(caseNumber){

		switch (caseNumber){

			case '2':
			//filter by title  
			this.filterByTitle();
			break;

			case '3':
			//filter by price up
			this.filterByPriceUp();
			break;

			case '4':
			//filter by price down
			this.filterByPriceDown();
			break;

			case '5':
			//filter by price down
			this.filterByPopularity();
			break;

		}
	}

	//display search helper
	searchHelper(){

	    this.setState(prevState => ({
	        stateSwitcher: !prevState.stateSwitcher,
	        searchResults : 'Here Comes Search'
	    }));

	    this.visible = true;
		
	}

	searchHelperOff(){
		this.setState(prevState => ({
	        stateSwitcher: !prevState.stateSwitcher,
	        searchResults : ''
	    }));

		this.visible = false;
	}

	//handle search 
	handleSearch(){
		console.log('search is done');
	}

	//handle reset
	handleReset(){
		console.log('reset is done');
	}


	render(){		

		return(
			<div className="row">

				{/* sortig component */}
				<div className="row">
					<div className="col-md-3"><SortFilters handleToUpdate = {this.handleToUpdate.bind(this)}></SortFilters></div>
					<div className="col-md-9">
						<div className="input-group">
							<input type="text" className="form-control" id="search" placeholder="Search Book by Title" onFocus={this.searchHelper.bind(this)} onBlur={this.searchHelperOff.bind(this)} />
							<div className="search-helper" style={this.visible ? {'display': 'block'} : {'display': 'none'}}>{this.state.searchResults}</div>
							<span className="input-group-btn">
                        		<button type="button" className="btn btn-success" onClick={this.handleSearch}>Search</button>          
                    		</span>
                    	</div>
                    </div>
				</div>

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