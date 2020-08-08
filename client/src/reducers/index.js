import { combineReducers } from 'redux';
import books from '../reducers/book_reducers';
import user from '../reducers/user_reducer';

const rootReducers = combineReducers({
  books,
  user,
});

export default rootReducers;
