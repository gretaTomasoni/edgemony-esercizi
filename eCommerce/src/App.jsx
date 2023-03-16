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

  return (
    <div className="App">
      <Header setModalCartContext={setModalCartContext} />
      <ListProducts setModalCartContext={setModalCartContext} />
      {modalCartContext.isVisible && (
        <CartModal
          modalCartContext={modalCartContext}
          setModalCartContext={setModalCartContext}
        />
      )}
    </div>
  );
}

export default App;
