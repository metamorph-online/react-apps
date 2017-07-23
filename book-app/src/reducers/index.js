import { combineReducers } from 'redux';
import getBooksData from './reducer_books';
import getCart from './reducer_cart';

const rootReducer = combineReducers({
   books: getBooksData,
   cart: getCart  
});

export default rootReducer;
