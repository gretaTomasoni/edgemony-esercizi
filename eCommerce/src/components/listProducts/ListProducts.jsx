import { useState } from "react";
import { productsList } from "../../mocks/produtsList";
import CardProduct from "../cardProduct";
import ProductModal from "../productModal";
import "./index.css";

const ListProducts = ({ setModalCartContext, setSelectedSize }) => {
  const [modalContext, setModalContext] = useState({
    productData: {},
    isVisibile: false,
  });

  const newArrProductList = productsList.map((product) => ({
    ...product,
    qty: 1,
  }));

  return (
    <div className="ListProducts">
      <div className="ListProducts__list">
        {newArrProductList.map((product) => (
          <CardProduct
            productData={product}
            setModalContext={setModalContext}
          />
        ))}
      </div>
      {modalContext.isVisibile && (
        <ProductModal
          productData={modalContext.productData}
          setModalContext={setModalContext}
          setModalCartContext={setModalCartContext}
          setSelectedSize={setSelectedSize}
        />
      )}
    </div>
  );
};

export default ListProducts;
