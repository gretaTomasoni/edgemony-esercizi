import { useState } from "react";

import CardList from "./components/cardList";
import Hero from "./components/hero";
import Footer from "./components/footer/Footer";
import MiniCardList from "./components/miniCardList/MiniCardList";
import Navbar from "./components/navbar";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [category, setCategory] = useState("smartphones");

  return (
    <div className="App">
      <Navbar
        inputValue={inputValue}
        setInputValue={setInputValue}
        category={category}
        setCategory={setCategory}
      />
      <Hero />
      <MiniCardList category={category} setCategory={setCategory} />
      <CardList title="Technology" endpoint="/products?limit=10" />
      <CardList title="Skincare" endpoint="/products?limit=10&skip=10" />
      <Footer />
    </div>
  );
}

export default App;
