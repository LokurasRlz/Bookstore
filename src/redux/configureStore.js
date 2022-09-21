import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer, { getBooksFromAPI } from './books/books';
import { checkStatusBook } from './categories/categories';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: checkStatusBook,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
store.dispatch(getBooksFromAPI());

export default store;
