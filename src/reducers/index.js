import { combineReducers } from 'redux';
import PostReducers from './reducer_posts';

const rootReducer = combineReducers({
  posts: PostReducers
});

export default rootReducer;
