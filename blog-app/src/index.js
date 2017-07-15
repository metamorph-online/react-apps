import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './components/app';
import IndexBooks from './containers/post_data';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>

    <Router history={browserHistory}>
	    <Route path='/' component={App}>
	      <IndexRoute component={IndexBooks} />
	    </Route>
  </Router>

  </Provider>
  , document.querySelector('.container'));
