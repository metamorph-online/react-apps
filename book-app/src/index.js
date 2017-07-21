import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import {createLogger} from 'redux-logger';

import App from './components/app';
import IndexBooks from './containers/book_data';
import reducers from './reducers';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(ReduxPromise, logger)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>

    <Router history={browserHistory}>
	    <Route path='/' component={App}>
	      <IndexRoute component={IndexBooks} />
	    </Route>
  </Router>

  </Provider>
  , document.querySelector('.container'));
