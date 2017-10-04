import React, { Component, PropTypes, createElement } from "react";
import { Switch, Route } from "react-router-dom";

import Test from "./Test";
import Sample from "./Sample";

class Layout extends Component {
	static propTypes = {};

	render() {
		return (
			<div>
				<Switch>
					<Route
						exact
						path="/test"
						render={({ location }) =>
							createElement(Test, {
								location
							})}
					/>

					<Route
						exact
						path="/sample"
						render={({ location }) =>
							createElement(Sample, {
								location
							})}
					/>
				</Switch>
			</div>
		);
	}
}

export default Layout;
