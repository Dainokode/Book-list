import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

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

  return (
    <BookContext.Provider value={{ books, addBook, deleteBook }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
