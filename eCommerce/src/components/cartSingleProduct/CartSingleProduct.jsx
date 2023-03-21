import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

import "./index.css";

const CartSingleProduct = ({
  product,
  setModalCartContext,
  priceCheckout,
  setPriceCheckout,
}) => {
  const [valueQty, setValueQty] = useState(product.qty);

  const plusQty = () => {
    const newQty = valueQty + 1;
    setValueQty(newQty);

    const localStorageCartItems =
      JSON.parse(localStorage.getItem("cartList")) || [];

    const newLocalStorageCart = localStorageCartItems.map((item) =>
      item.id === product.id ? { ...item, qty: newQty } : item
    );

    localStorage.setItem("cartList", JSON.stringify(newLocalStorageCart));
    setPriceCheckout(priceCheckout + product.price);
  };

  const lessQty = () => {
    const newQty = valueQty - 1;
    setValueQty(newQty);

    const localStorageCartItems =
      JSON.parse(localStorage.getItem("cartList")) || [];

    const newLocalStorageCart = localStorageCartItems.map((item) =>
      item.id === product.id ? { ...item, qty: newQty } : item
    );

    for (let i = 0; i < newLocalStorageCart.length; i++) {
      if (newLocalStorageCart[i].id === product.id && newQty === 0)
        newLocalStorageCart.splice(i, 1);
    }

    localStorage.setItem("cartList", JSON.stringify([...newLocalStorageCart]));
    setPriceCheckout(priceCheckout - product.price);

    setModalCartContext({
      productInfo: newLocalStorageCart,
      isVisible: true,
    });
  };

  const removeSingleItem = () => {
    const localStorageCartItems =
      JSON.parse(localStorage.getItem("cartList")) || [];

    for (let i = 0; i < localStorageCartItems.length; i++) {
      if (localStorageCartItems[i].id === product.id)
        localStorageCartItems.splice(i, 1);
    }
    localStorage.setItem(
      "cartList",
      JSON.stringify([...localStorageCartItems])
    );
    setModalCartContext({
      productInfo: localStorageCartItems,
      isVisible: true,
    });
    setPriceCheckout(priceCheckout - product.price * product.qty);
  };

  return (
    <div className="CartSingleProduct">
      <img src={product.thumbnail} alt={product.title} />
      <div>
        <div className="CartSingleProduct_info">
          <p className="CartSingleProduct_title">
            {product.title.substr(0, 24)}
            <span className="dot">...</span>
          </p>
          <p className="CartSingleProduct_size">{product.selectedSize}</p>
          <p className="CartSingleProduct_price">€{product.price}</p>
        </div>
        <div className="CartSingleProduct_settings">
          <div className="quantityDiv">
            <div onClick={lessQty} className="quantity">
              <FiMinus className="quantity_icon" />
            </div>
            <input type="text" className="quantityInput" value={valueQty} />
            <div onClick={plusQty} className="quantity">
              <FiPlus className="quantity_icon" />
            </div>
          </div>
          <div>
            <button
              className="CartSingleProduct_remove"
              onClick={removeSingleItem}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSingleProduct;
