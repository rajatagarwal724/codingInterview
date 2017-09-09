import { combineReducers } from 'redux';
import BooksReducer from './reducers_books';
import ActiveBookReducer from './reducers_active_book';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;
