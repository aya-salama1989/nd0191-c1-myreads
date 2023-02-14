import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import * as BooksAPI from "./BooksAPI.js";
import Library from "./Library";
import SearchBooks from "./SearchBooks";
import BookDetails from "./BookDetails";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooksList = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooksList();
  }, []);

  const refresh = (updatedBook) => {
    console.log(updatedBook);
    const updatedBooksList = books.filter((book) => book.id !== updatedBook.id);
    const updatedBooksList2 = updatedBooksList.concat(updatedBook);
    setBooks(updatedBooksList2);
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Library books={books} shouldRefresh={refresh} />}
      />
      <Route
        path="/search"
        element={
          <SearchBooks shouldRefresh={refresh} categorizedBooks={books} />
        }
      />

      <Route path="/details:bookId" element={<BookDetails />} />
    </Routes>
  );
}

export default App;
