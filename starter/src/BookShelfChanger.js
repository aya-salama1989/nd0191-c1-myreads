import { useState } from "react";
import PropTypes from "prop-types";

const BookShelfChanger = ({ book, updateBookShelfCallBack }) => {
  const bookShelves = [
    { id: 1, value: "currentlyReading", name: "Currently Reading" },
    { id: 2, value: "wantToRead", name: "Want to Read" },
    { id: 3, value: "read", name: "Read" },
    { id: 4, value: "none", name: "None" },
  ];

  const [updatedBook, setUpdatedBook] = useState(book);

  const onShelfChange = (e) => {
    book.shelf = e.target.value;
    setUpdatedBook(book);
    updateBookShelfCallBack(updatedBook);
  };

  return (
    <div className="book-shelf-changer">
      <select value={book.shelf} onChange={onShelfChange}>
        <option disabled>Move to...</option>
        {bookShelves.map((shelf) => (
          <option key={shelf.id} value={shelf.value}>
            {shelf.name}
          </option>
        ))}
      </select>
    </div>
  );
};

BookShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  updateBookShelfCallBack: PropTypes.func.isRequired,
};

export default BookShelfChanger;
