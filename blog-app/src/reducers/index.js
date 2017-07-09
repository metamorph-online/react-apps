import { combineReducers } from 'redux';
import getBooksData from './reducer_post';

const rootReducer = combineReducers({
   books: getBooksData
});

export default rootReducer;
