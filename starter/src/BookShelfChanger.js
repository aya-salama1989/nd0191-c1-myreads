import { useState } from "react";
import PropTypes from "prop-types";

const BookShelfChanger = ({ book, updateBookShelfCallBack }) => {

  const [updatedBook, setUpdatedBook] = useState(book);

  const onShelfChange = (e) => {
    book.shelf = e.target.value;
    console.log(book);
    setUpdatedBook(book);
    updateBookShelfCallBack(updatedBook);
  };


  return (
    <div className="book-shelf-changer">
     {console.log(book)} 
      <select value={book.shelf} onChange={onShelfChange}>
        <option disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

BookShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  updateBookShelfCallBack: PropTypes.func.isRequired,
};

export default BookShelfChanger;
