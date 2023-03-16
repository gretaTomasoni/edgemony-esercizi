import "./index.css";

const CartSingleProduct = ({ product }) => {
  return (
    <div className="CartSingleProduct">
      <img src={product.thumbnail} alt={product.title} />
      <div className="CartSingleProduct_info">
        <p>{product.title}</p>
        <p>{product.size}</p>
        <p>{product.price}</p>
        <button>Remove</button>
      </div>
    </div>
  );
};

export default CartSingleProduct;
