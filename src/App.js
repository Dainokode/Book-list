import React from "react";
import AddBookForm from "./components/AddBookForm";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import BookContextProvider from "./contexts/BookContext";
import "./styles/main.scss";

const App = () => {
  return (
    <div className="container">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <AddBookForm />
      </BookContextProvider>
    </div>
  );
};

export default App;
