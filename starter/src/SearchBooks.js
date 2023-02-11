import { Link } from "react-router-dom";
import { useState } from "react";
import * as BooksAPI from "./BooksAPI.js";
import Book from "./Book.js";
import PropTypes from "prop-types";

const SearchBooks = ({ shouldRefresh }) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [errorHandlingMessage, setErrorHandlingMessage] = useState(null);

  const onSearchKeywordChange = (e) => {
    const query = e.target.value.trim();
    setSearchKeyword(query);
    if (query.length === 0) {
      setSearchResults([]);
      setErrorHandlingMessage('"Empty space"');
    } else {
      searchBooks(query);
    }
  };

  const searchBooks = async () => {
    const result = await BooksAPI.search(searchKeyword, 100);
    console.log(result);

    if (Array.isArray(result)) {
      setSearchResults(result);
      setErrorHandlingMessage(null);
    } else {
      setSearchResults(null);
      setErrorHandlingMessage(searchKeyword);
    }
  };

  const onBookShelfChange = (updatedBook) => {
    shouldRefresh(updatedBook);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={onSearchKeywordChange}
          />
        </div>
      </div>
      {errorHandlingMessage ? (
        <div className="search_books_error">
          <h1>
            There is no results for such query as {errorHandlingMessage} please
            use real words and sentences to get to your results
          </h1>
        </div>
      ) : (
        <div className="search-books-results">
          <ol className="books-grid">
            {searchResults?.map((book) => (
              <Book
                key={book.id}
                bookObject={book}
                onBookShelfChange={onBookShelfChange}
              />
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

SearchBooks.propTypes = {
  shouldRefresh: PropTypes.func.isRequired,
};

export default SearchBooks;
