import { combineReducers } from 'redux';
import getBooksData from './reducer_books';
import getCart from './reducer_cart';
import getBook from './reducer_book';

const rootReducer = combineReducers({
   books: getBooksData,
   cart: getCart,
   book: getBook  
});

export default rootReducer;
