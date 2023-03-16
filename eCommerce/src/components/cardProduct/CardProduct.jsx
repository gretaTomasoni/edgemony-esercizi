import "./index.css";

const CardProduct = ({ productData, setModalContext }) => {
  const onHadleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setModalContext({
      productData: productData,
      isVisibile: true,
    });
  };

  return (
    <div className="CardProduct">
      <img
        onClick={onHadleClick}
        src={productData.thumbnail}
        alt={productData.title}
      />
      <div className="CardProduct__text-content">
        <h4 onClick={onHadleClick}>
          {productData.title} - {productData.color}
        </h4>
        <p>€{productData.price}</p>
      </div>
    </div>
  );
};

export default CardProduct;
