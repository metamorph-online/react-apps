import { combineReducers } from 'redux';
import getPostData from './reducer_post';

const rootReducer = combineReducers({
   getPostData: getPostData
});

export default rootReducer;
