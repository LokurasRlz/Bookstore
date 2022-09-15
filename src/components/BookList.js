import Book from './Book';

const BookList = () => {
    const booksData = [
      
      { id: 1, title: 'Book 1', author: 'Author 1' },
      { id: 2, title: 'Book 2', author: 'Author 2' },
      { id: 3, title: 'Book 3', author: 'Author 3' },
    ];
    return booksData.map((item) => (
      <Book genre={item.genre} title={item.title} author={item.author} key={item.id} />
    ));
  };
  
  export default BookList;