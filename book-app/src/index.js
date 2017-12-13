import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import {createLogger} from 'redux-logger';

import App from './components/app';
import IndexBooks from './containers/books_data';
import BookShow from './containers/book_show';
import reducers from './reducers';


const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(ReduxPromise, logger)(createStore);

ReactDOM.render( 
  <Provider store={createStoreWithMiddleware(reducers)}>

    <Router history={browserHistory}>
	    <Route path='/' component={App}>

	    	<Route path="book/:id" component={BookShow} />
	      	<IndexRoute component={IndexBooks} />      	

	    </Route>
  </Router>

  </Provider>
  , document.querySelector('.container'));
