import "./index.css";

const CartSingleProduct = ({ product, setModalCartContext }) => {
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
  };
  return (
    <div className="CartSingleProduct">
      <img src={product.thumbnail} alt={product.title} />
      <div className="CartSingleProduct_info">
        <p>{product.title}</p>
        <p>{product.size}</p>
        <p>{product.price}</p>
        <button onClick={removeSingleItem}>Remove</button>
      </div>
    </div>
  );
};

export default CartSingleProduct;
