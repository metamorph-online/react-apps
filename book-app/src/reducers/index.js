import { combineReducers } from 'redux';
import getBooksData from './reducer_books';
import getCart from './reducer_cart';
import getBook from './reducer_book';
import getUser from './reducer_user';

const rootReducer = combineReducers({
   books: getBooksData,
   cart: getCart,
   book: getBook,
   user: getUser  
});

export default rootReducer;
