import React, { Component, PropTypes } from "react";
import {IconClasses} from "@blueprintjs/core";


class Test extends Component {
	static propTypes = {};

	render() {
		return(
			<div className="my-height">
				<div className="first-row">

					<div className="left-side">
						<div className="top">
							<div className="my-project-text">My project</div>
						</div>
					</div>
					<div className="right-side">
						<div className="app-box">
							<div className="app-box-title">Project settings page</div>

							<div className="pt-form-group">
								<label className="pt-label" for="name-input">Name</label>

								<div className="pt-form-content">
								    <input id="name-input" className="pt-input my-input"  placeholder="" type="text" dir="auto" />								    
								</div>
							</div>

							<div className="pt-form-group">
							  	<label className="pt-label" for="search-input">Search Something</label>
							  <div className="pt-form-content">
							    <div className="pt-input-group">
							      <span className="pt-icon pt-icon-search"></span>
							      <input id="search-input" className="pt-input my-input" type="text" placeholder="" dir="auto" />
							    </div>							    
							  </div>
							</div>
						</div>
					</div>
				</div>
				<div className="second-row">
					<div className="footer"><a href="#">www.refinepro.com</a></div>
				</div>
			</div>
		)
	}
}

export default Test;
