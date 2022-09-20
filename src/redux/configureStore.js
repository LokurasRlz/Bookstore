import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books';
import { checkStatusBook } from './categories/categories';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: checkStatusBook,
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
