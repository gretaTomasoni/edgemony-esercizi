import CartSingleProduct from "../cartSingleProduct";
import "./index.css";

const CartModal = ({ modalCartContext, setModalCartContext, selectedSize }) => {
  const closeCartModal = () => {
    setModalCartContext({ productInfo: [], isVisible: false });
  };

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
        <div className="Cart__listProduct">
          {modalCartContext.productInfo.map((product) => (
            <CartSingleProduct
              product={product}
              setModalCartContext={setModalCartContext}
              selectedSize={selectedSize}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
