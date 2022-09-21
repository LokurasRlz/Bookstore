import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { removeBookFromAPI } from '../redux/books/books';

const Book = (props) => {
  const {
    title, author, id,
  } = props;
  const dispatch = useDispatch();

  const removeBookFromStore = () => {
    dispatch(removeBookFromAPI(id));
  };

  const percentage = Math.floor(Math.random() * 100);

  return (
    <li className="book-container">
      <div className="book-header">
        <span className="book-header__category" />
        <h3 className="book-header__title">{title}</h3>
        <p className="book-header__author">{author}</p>
        <div className="book-header__buttons">
          <button type="button" className="btn">Comments</button>
          <button type="button" className="remove btn" onClick={removeBookFromStore}>Remove</button>
          <button type="button" className="btn">Edit</button>
        </div>
      </div>
      <div className="book-circle">
        <div className="circle">
          <CircularProgressbar value={percentage} text="" />
        </div>
        <div className="percent-wrap">
          <p className="percentage">
            {percentage}
            %
          </p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="book-progress">
        <p className="current-chapter">CURRENT CHAPTER</p>
        <p className="chapter">Introduction</p>
        <button className="update-btn" type="button">
          UPDATE PROGRESS
        </button>
      </div>
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
