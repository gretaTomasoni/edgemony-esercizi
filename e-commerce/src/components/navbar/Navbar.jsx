import { useState } from "react";
import "./index.css";

const Navbar = ({ inputValue, setInputValue, category, setCategory }) => {
  const onHandleInput = (e) => {
    setInputValue(() => e.target.value);
    setCategory(() => e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    console.log(category);
  };

  return (
    <div className="Navbar">
      <ul>
        <li>Home</li>
        <li>Contacts</li>
        <li>About us</li>
      </ul>
      <form onSubmit={onHandleSubmit}>
        <input
          value={inputValue}
          onChange={onHandleInput}
          type="text"
          placeholder="Cerca categoria (es laptops, skincare, furniture) ..."
        />
      </form>
    </div>
  );
};

export default Navbar;
