import Book from "./Book";
import PropTypes from "prop-types";

const Shelf = ({ shelfObject, booksList, onShelfChanged }) => {
  const shelfBooks = booksList.filter(
    (book) => book.shelf === shelfObject.name
  );

  const onBookShelfChange = (updatedBook) => {
    onShelfChanged(updatedBook);
  };

  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfObject.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {shelfBooks?.map((book) => (
              <Book
                key={book.id}
                bookObject={book}
                onBookShelfChange={onBookShelfChange}
              />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

Shelf.propTypes = {
  shelfObject: PropTypes.object.isRequired,
  booksList: PropTypes.array.isRequired,
  onShelfChanged: PropTypes.func.isRequired,
};

export default Shelf;
