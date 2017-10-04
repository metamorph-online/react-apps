import "babel-polyfill";
import React from "react";
import { AppContainer } from "react-hot-loader";
import { render } from "react-dom";
import Root from "./components/Root";

// require('./styles/index.scss');

const root = document.createElement("div");
document.body.appendChild(root);

render(
  <AppContainer>
    <Root />
  </AppContainer>,
  root
);

// Hot Module Replacement API
/* istanbul ignore if  */
if (module.hot) {
  module.hot.accept("./components/Root", () => {
    const NextRoot = require("./components/Root").default; // eslint-disable-line
    render(
      <AppContainer>
        <NextRoot />
      </AppContainer>,
      root
    );
  });
}
