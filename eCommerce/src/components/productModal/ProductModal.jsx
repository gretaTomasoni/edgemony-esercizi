import { useState } from "react";
import "./index.css";

const ProductModal = ({
  productData,
  setModalContext,
  setModalCartContext,
  setSelectedSize,
}) => {
  const [selectedOption, setSelectedOption] = useState("Small");
  const [sizePresent, isSizePresent] = useState(
    productData.size[0] === "Small" ? true : false
  );

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
    productData.selectedSize = e.target.value;
    setSelectedOption(e.target.value);

    productData.size.includes(e.target.value)
      ? isSizePresent(true)
      : isSizePresent(false);
  };

  const closeModalProduct = () => {
    setModalContext({
      productData: productData,
      isVisibile: false,
    });
  };

  const addProduct = (e) => {
    e.preventDefault();

    const localStorageCartItems =
      JSON.parse(localStorage.getItem("cartList")) || [];

    const isProductDataInsideLocalStorage = !localStorageCartItems.find(
      (product) => product.id === productData.id
    );

    if (isProductDataInsideLocalStorage) {
      localStorage.setItem(
        "cartList",
        JSON.stringify([...localStorageCartItems, productData])
      );
    } else {
      alert(`${productData.title} is already in the cart`);
    }

    if (isProductDataInsideLocalStorage) {
      setModalCartContext({
        productInfo: [...localStorageCartItems, productData],
        isVisible: true,
      });
    }
  };

  const soldOutProduct = (e) => {
    e.preventDefault();
  };

  return (
    <div className="ProductModal">
      <div className="ProductModal__images">
        {productData.images.map((image) => (
          <img src={image} alt="product image" />
        ))}
      </div>
      <div className="ProductModal__info">
        <h3 className="ProductModal__title">
          {productData.title} - {productData.color}
        </h3>
        <span className="ProductModal__price">€{productData.price}</span>
        <form
          onSubmit={sizePresent ? addProduct : soldOutProduct}
          className="ProductModal__form"
        >
          <div className="size">
            <span className="size__text">Size:</span>
            <ul className="size_list">
              <li className={selectedOption === "Small" ? "selected" : ""}>
                <label for="Small">Small</label>
                <input
                  className="size_input"
                  name="size"
                  id="Small"
                  type="radio"
                  value={"Small"}
                  onChange={handleSizeChange}
                />
              </li>
              <li className={selectedOption === "Medium" ? "selected" : ""}>
                <label for="Medium">Medium</label>
                <input
                  className="size_input"
                  name="size"
                  id="Medium"
                  type="radio"
                  value={"Medium"}
                  onChange={handleSizeChange}
                />
              </li>
              <li className={selectedOption === "Large" ? "selected" : ""}>
                <label for="Large">Large</label>
                <input
                  className="size_input"
                  name="size"
                  id="Large"
                  type="radio"
                  value={"Large"}
                  onChange={handleSizeChange}
                />
              </li>
              <li className={selectedOption === "XL" ? "selected" : ""}>
                <label for="XL">XL</label>
                <input
                  className="size_input"
                  name="size"
                  id="XL"
                  type="radio"
                  value={"XL"}
                  onChange={handleSizeChange}
                />
              </li>
              <li className={selectedOption === "2XL" ? "selected" : ""}>
                <label for="2XL">2XL</label>
                <input
                  className="size_input"
                  name="size"
                  id="2XL"
                  type="radio"
                  value={"2XL"}
                  onChange={handleSizeChange}
                />
              </li>
            </ul>
          </div>
          <button
            onClick={sizePresent ? addProduct : soldOutProduct}
            className={`button__addToCart ${
              sizePresent ? null : "disabled_button"
            }`}
            type="submit"
          >
            {sizePresent ? "ADD TO CART" : "SOLD OUT"}
          </button>
        </form>
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
