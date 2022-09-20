import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const {
    genre, title, author, id,
  } = props;
  const dispatch = useDispatch();

  const removeBookFromStore = () => {
    dispatch(removeBook(id));
  };

  return (
    <li className="book-container">
      <div className="book-header">
        <span className="book-header__category">{genre}</span>
        <h3 className="book-header__title">{title}</h3>
        <p className="book-header__author">{author}</p>
        <div className="book-header__buttons">
          <button type="button">Comments</button>
          <button type="button" onClick={removeBookFromStore}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>

      <div className="book-progress" />
    </li>
  );
};

Book.propTypes = {
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
