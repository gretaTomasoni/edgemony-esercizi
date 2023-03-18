import { useState } from "react";

import Header from "./components/header";
import ListProducts from "./components/listProducts";
import CartModal from "./components/cartModal";
import "./App.css";

function App() {
  const [modalCartContext, setModalCartContext] = useState({
    productInfo: [],
    isVisible: false,
  });
  const [selectedSize, setSelectedSize] = useState("Small");

  return (
    <div className={`App ${modalCartContext.isVisible && "noScroll"}`}>
      <Header setModalCartContext={setModalCartContext} />
      <ListProducts
        setModalCartContext={setModalCartContext}
        setSelectedSize={setSelectedSize}
      />
      {modalCartContext.isVisible && (
        <CartModal
          modalCartContext={modalCartContext}
          setModalCartContext={setModalCartContext}
          selectedSize={selectedSize}
        />
      )}
    </div>
  );
}

export default App;
