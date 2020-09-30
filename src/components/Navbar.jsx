import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <nav className="navbar">
      <h1>Reading List</h1>
      <p>You have {books.length} books left to read</p>
    </nav>
  );
};

export default Navbar;
