import BookShelfChanger from "./BookShelfChanger";
import * as BooksAPI from "./BooksAPI.js";
import PropTypes from "prop-types";

const Book = ({ bookObject, onBookShelfChange }) => {
  //update book callBack

  const updateBookShelfCallBack = (updatedBook) => {
    updateBookShelf(updatedBook, updatedBook.shelf);
  };

  //reflect update to the Server
  const updateBookShelf = async (book, newShelf) => {
    const res = await BooksAPI.update(book, newShelf);
    console.log(res);
    onBookShelfChange(book);
  };

  let imagePath;

  if(bookObject.imageLinks === undefined){
    imagePath = "";
  }else{
    imagePath = bookObject.imageLinks.smallThumbnail;
  }

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${imagePath}")`,
          }}
        ></div>
        <BookShelfChanger
          book={bookObject}
          updateBookShelfCallBack={updateBookShelfCallBack}
        />
      </div>
      <div className="book-title">{bookObject.title}</div>
      <div className="book-authors">{bookObject.authors?.join(", ")}</div>
    </div>
  );
};

Book.protoTypes = {
  bookObject: PropTypes.object.isRequired,
  onBookShelfChange: PropTypes.func.isRequired,
}
export default Book;
