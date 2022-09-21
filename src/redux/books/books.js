import axios from 'axios';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/H6gicD3UOwICr2UggXi3/books';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOK = 'bookstore/books/FETCH_BOOK';

const initialState = [];

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  book,
});

const fetchBook = (book) => ({
  type: FETCH_BOOK,
  book,
});

const getBooksFromAPI = () => async (dispatch) => {
  const books = await axios.get(baseURL);
  const booksFetched = Object.entries(books.data).map((item) => {
    const { title, author } = item[1][0];
    return { id: item[0], title, author };
  });
  dispatch(fetchBook(booksFetched));
};

const addBookToAPI = (book) => async (dispatch) => {
  const { id, title, author } = book;
  const newBook = {
    item_id: id,
    title,
    author,
    category: 'Not Available',
  };
  await axios.post(baseURL, newBook);
  dispatch(addBook(book));
};

const removeBookFromAPI = (id) => async (dispatch) => {
  await axios.delete(`${baseURL}/${id}`);
  dispatch(removeBook({ id }));
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.book,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.book.id);
    case FETCH_BOOK:
      return action.book;
    default:
      return state;
  }
};

export {
  getBooksFromAPI, addBookToAPI, removeBookFromAPI,
};

export default booksReducer;
