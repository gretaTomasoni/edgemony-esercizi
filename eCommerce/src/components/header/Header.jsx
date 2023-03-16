import { FiShoppingBag, FiMenu } from "react-icons/fi";
import "./index.css";

const Header = ({ setModalCartContext }) => {
  const openCart = () => {
    const localStorageCartItems =
      JSON.parse(localStorage.getItem("cartList")) || [];

    setModalCartContext({
      productInfo: localStorageCartItems,
      isVisible: true,
    });
  };

  return (
    <div className="Header">
      <FiMenu className="icon" />
      <img
        className="Header_logo"
        src="https://cdn.shopify.com/s/files/1/0709/4350/6732/files/Rp-Logo_1200x.png?v=1674005154"
        alt="logo Rue Porter"
      />
      <div className="icons">
        <FiShoppingBag onClick={openCart} className="icon" />
      </div>
    </div>
  );
};

export default Header;
