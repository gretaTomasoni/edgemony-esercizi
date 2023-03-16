import "./index.css";

const ProductModal = ({
  productData,
  setModalContext,
  setModalCartContext,
}) => {
  const closeModalProduct = () => {
    setModalContext({
      productData: productData,
      isVisibile: false,
    });
  };

  const addProduct = () => {
    const localStorageCartItems =
      JSON.parse(localStorage.getItem("cartList")) || [];

    localStorage.setItem(
      "cartList",
      JSON.stringify([...localStorageCartItems, productData])
    );

    setModalCartContext({
      productInfo: localStorageCartItems,
      isVisible: true,
    });
  };

  return (
    <div className="ProductModal">
      <div className="ProductModal__images">
        <img src={productData.images[0]} alt="" />
      </div>
      <div className="ProductModal__info">
        <h3 className="ProductModal__title">
          {productData.title} - {productData.color}
        </h3>
        <span className="ProductModal__price">€{productData.price}</span>
        <div className="size">
          <span className="size__text">Size:</span>
          <ul>
            <li>Small</li>
            <li>Medium</li>
            <li>Large</li>
            <li>XL</li>
            <li>2XL</li>
          </ul>
        </div>
        <div className="quantity">
          <span className="quantity__text">Quantity:</span>
          <div>
            <span> - </span>
            <input type="text" pattern="[0-9]*" name="quantity" />
            <span> + </span>
          </div>
        </div>
        <button
          onClick={addProduct}
          className="button__addToCart"
          type="submit"
        >
          ADD TO CART
        </button>
        <div className="ProductModal__moreInfo">
          <p className="name_category">RP 2.0 1100G FRENCH TERRY</p>
          {productData.fabric.map((item) => (
            <p className="category_information">{item}</p>
          ))}
          <p className="name_category">FEATURES</p>
          {productData.features.map((item) => (
            <p className="category_information">{item}</p>
          ))}
          <p className="name_category">FIT INFORMATION</p>
          {productData.fitInformation.map((item) => (
            <p className="category_information">{item}</p>
          ))}
        </div>
      </div>
      <button onClick={closeModalProduct} className="ProductModal__close">
        X
      </button>
    </div>
  );
};

export default ProductModal;
