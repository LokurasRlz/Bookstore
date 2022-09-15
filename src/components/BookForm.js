const BookForm = () => (
  <section className="form__section">
    <h2 className="section__title">ADD NEW BOOK</h2>
    <form className="book__form">
      <input type="text" className="book__form-title" id="form-title" placeholder="Book title" />
      <input type="text" className="book__form-author" id="form-author" placeholder="Author" />
      <button type="submit" className="btn book__form-btn">ADD BOOK</button>
      <span className="form__message" id="form__message" />
    </form>
  </section>
);

export default BookForm;
