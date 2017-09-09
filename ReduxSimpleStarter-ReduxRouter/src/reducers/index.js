import { combineReducers } from 'redux';
import ReducerPost from './reducer_post';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: ReducerPost,
  form: formReducer
});

export default rootReducer;
