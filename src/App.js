import React from "react";
import Navbar from "./components/Navbar";
import BookContextProvider from "./contexts/BookContext";
import "./styles/main.scss";

const App = () => {
  return (
    <div className="container">
      <BookContextProvider>
        <Navbar />
      </BookContextProvider>
    </div>
  );
};

export default App;
