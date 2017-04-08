import { FETCH_POSTS } from '../constants';

//all: array of all posts to display
//post: active/selcted post for user viewing
const INITIAL_STATE = {
  all: [],
  post: null
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case FETCH_POSTS:
      return {
        ...state,
        all: action.payload.data
      };
    default:
      return state;
  }
};
