/* component contains select elements that change the order of books according to the selected options */

import React, {Component}  from 'react';
import {Link} from 'react-router';
import ReactDOM from 'react-dom';


export default class Search extends Component{

	constructor(props){
		super(props);

		this.state = {searchResults:'', visible: false}

		var myHtml = '',
		elem = '',
		arr = [];

		//this.searchHelper = this.searchHelper.bind(this);
	}

	componentDidMount() {
    	document.addEventListener('click', this.handleClickOutside.bind(this), true);
	}

	componentWillUnmount() {
	    document.removeEventListener('click', this.handleClickOutside.bind(this), true);
	}

	//we need to know when the user clicks outside search to hide helping dropdown
	handleClickOutside(event) {
	    const domNode = ReactDOM.findDOMNode(this);

	    if (!domNode || !domNode.contains(event.target)) {
	        this.setState({
	            visible : false
	        });
	    }
	}

	searchResultsDropdown(myarray){

		return(

			<div>

				{myarray.map((book) =>{

					return(
						<div key={book.id}><Link to={"book/" + book.id} className="title">{book.name}</Link></div>
					)
				})}

			</div>
		);
	}

	//display search helper
	searchHelper(e){

		this.elem = e.target.value;

		this.arr = this.props.books.filter((item, index, array) => {

					//returns item if search matchs the book title(lower case)
			return item.name.toLowerCase().indexOf(this.elem.toLowerCase()) !== -1;
		});



	    this.setState(prevState => ({
	        searchResults : this.searchResultsDropdown(this.arr)
	    }));

	    if(this.elem !== '' && this.elem !== ' ' && this.arr.length > 0){
	    	this.setState({visible: true});
	    } else {
	    	this.setState({visible: false});
	    }
	    

	}

	searchHelperOff(e){

		if (!event.currentTarget.contains(event.relatedTarget)) {

			//this.setState({visible : false});
		}
	}

	//handle search 
	handleSearch(){
		console.log('search is done');
	}



	render(){

		return(
			
			<div className="input-group">
				<input type="text" className="form-control" id="search" placeholder="Search Book by Title" onChange={(e) => this.searchHelper(e)} onBlur={(e) => this.searchHelperOff(e)} />
				<div className="search-helper" style={this.state.visible ? {'display': 'block'} : {'display': 'none'}}>{this.state.searchResults}</div>
				<span className="input-group-btn">
                    <button type="button" className="btn btn-success" onClick={this.handleSearch}>Search</button>          
                </span>
            </div>
		);
	}
}

