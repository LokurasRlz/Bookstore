import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBookToAPI } from '../redux/books/books';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const dispatch = useDispatch();

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      author,
      genre,
    };
    dispatch(addBookToAPI(newBook));
    setTitle('');
    setAuthor('');
    setGenre('');
  };

  return (
    <section className="form__section">
      <h2 className="section__title">ADD NEW BOOK</h2>
      <form className="book__form">
        <input type="text" className="book__form-title" id="form-title" placeholder="Book title" value={title} onChange={onTitleChange} onBlur={onTitleChange} />
        <input type="text" className="book__form-author" id="form-author" placeholder="Author" value={author} onChange={onAuthorChange} onBlur={onAuthorChange} />
        <button type="submit" className="btn book__form-btn" onClick={handleSubmit}>ADD BOOK</button>
        <span className="form__message" id="form__message" />
      </form>
    </section>
  );
};

export default BookForm;
