/* component contains select elements that change the order of books according to the selected options */

import React, {Component} from 'react';


export default class SortFilters extends Component{

	constructor(props){
		super(props);
		this.filterChange = this.filterChange.bind(this);
		this.state = {value: '1'}; //default value
	}

	filterChange(event){
		this.setState({value: event.target.value}, () => { 
			this.props.handleToUpdate(this.state.value)
		});
		
	}

	render(){

		return(
			<div className="my-filters">
				<div className="form-group">
				  <select className="form-control" value={this.state.value} id="sel1" onChange={this.filterChange}>
				  	<option disabled value='1'>Please select Book By:</option>
				    <option value='2'>Book Title</option>
				    <option value='3'>Price: Lower to Higher</option>
				    <option value='4'>Price: Higher to Lower</option>
				    <option value='5'>Most Popular</option>
				  </select>
				</div>
			</div>
		);
	}
}

