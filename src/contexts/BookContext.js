import React, { createContext, useState } from "react";
import uuidv4 from "uuidv4";

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([
    { title: "The Wolf Of Wall Street", id: uuidv4() },
    { title: "How To Talk To Anyone", id: uuidv4() }
  ]);

  const addBook = (title, author) => {
    setBooks([...books], { title, author });
  };

  const deleteBook = (id) => {
    books.filter((book) => {
      book !== id;
    });
  };

  <BookContext.Provider value={(books, addBook, deleteBook)}>
    {children}
  </BookContext.Provider>;
};

export default BookContextProvider;
