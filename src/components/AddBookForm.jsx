import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const AddBookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_BOOK", book: { title, author } });
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        required
        placeholder="enter title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={author}
        required
        placeholder="enter author"
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input type="submit" value="Add book" />
    </form>
  );
};

export default AddBookForm;
