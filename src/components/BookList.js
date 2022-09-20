import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const bookList = useSelector((state) => state.books);
  return (
    <ul className="book-list">
      {bookList.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          genre={book.genre}
        />
      ))}
    </ul>
  );
};

export default BookList;
