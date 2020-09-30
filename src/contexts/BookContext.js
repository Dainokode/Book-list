import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuidv4() }]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, deleteBook }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
