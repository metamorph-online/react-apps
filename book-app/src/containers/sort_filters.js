/* component contains select elements that change the order of books according to the selected options */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {filterApplied} from '../actions/index';

class SortFilters extends Component{

	constructor(props){
		super(props);
		this.filterChange = this.filterChange.bind(this);
		this.state = {value: '1'};
	}

	filterChange(event){
		this.setState({value: event.target.value}, () => { this.props.filterApplied(this.state.value); this.props.handleToUpdate('changed')});
		
	}

	render(){

		return(
			<div className="my-filters">
				<div className="form-group">
				  <select className="form-control" value={this.state.value} id="sel1" onChange={this.filterChange}>
				  	<option disabled value='1'>Please select Book By:</option>
				    <option value='2'>Book ID</option>
				    <option value='3'>Price: Lower to Higher</option>
				    <option value='4'>Price: Higher to Lower</option>
				    <option value='5'>Number of Purchases</option>
				  </select>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state){

	return{}
}

export default connect(mapStateToProps, {filterApplied})(SortFilters);