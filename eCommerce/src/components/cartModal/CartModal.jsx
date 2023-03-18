import CartSingleProduct from "../cartSingleProduct";
import "./index.css";

const CartModal = ({ modalCartContext, setModalCartContext, selectedSize }) => {
  const closeCartModal = () => {
    setModalCartContext({ productInfo: [], isVisible: false });
  };

  const localStorageProduct = JSON.parse(localStorage.getItem("cartList"));

  return (
    <div className="CartModal">
      <div onClick={closeCartModal} className="CartModal_overlay"></div>
      <div className="CartModal_content">
        <div className="CartModal_header">
          <h3 className="CartModal_headerTitle">CART</h3>
          <button onClick={closeCartModal} className="CartModal__close">
            X
          </button>
        </div>
        {localStorageProduct.length === 0 ? (
          <p className="emptyCart">YOUR CART IS EMPTY</p>
        ) : (
          <div>
            <div className="Cart__listProduct">
              {modalCartContext.productInfo.map((product) => (
                <CartSingleProduct
                  product={product}
                  setModalCartContext={setModalCartContext}
                  selectedSize={selectedSize}
                />
              ))}
            </div>
            <div className="CartModal_footer">
              <p className="CartModal_shipping">
                Shipping & taxes calculated at checkout.
              </p>
              <button onClick={closeCartModal} className="CartModal__close">
                CHECKOUT · €
                {modalCartContext.productInfo
                  .reduce((acc, product) => acc + product.price, 0)
                  .toFixed(2)}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
