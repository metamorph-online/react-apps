import React, { createElement } from "react";
import PropTypes from "prop-types";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createHistory from "history/createHashHistory";
import { Switch, Route } from "react-router-dom";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware
} from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";

import { crudSaga } from "admin-on-rest/lib/sideEffect/saga";

const appReducer = combineReducers({
  routing: routerReducer
});

const initialState = {};

const resettableAppReducer = (state, action) => appReducer(state, action);

const saga = function* rootSaga() {};
const sagaMiddleware = createSagaMiddleware();
const routerHistory = createHistory();
const store = createStore(
  resettableAppReducer,
  initialState,
  compose(
    applyMiddleware(sagaMiddleware, routerMiddleware(routerHistory)),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
sagaMiddleware.run(saga);

import Layout from "./Layout";

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={routerHistory}>
      <Layout />
    </ConnectedRouter>
  </Provider>
);
export default Root;
