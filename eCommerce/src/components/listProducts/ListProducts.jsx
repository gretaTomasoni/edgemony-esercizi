import { useState } from "react";
import { productsList } from "../../mocks/produtsList";
import CardProduct from "../cardProduct";
import ProductModal from "../productModal";
import "./index.css";

const ListProducts = ({ setModalCartContext }) => {
  const [modalContext, setModalContext] = useState({
    productData: {},
    isVisibile: false,
  });

  return (
    <div className="ListProducts">
      <div className="ListProducts__list">
        {productsList.map((product) => (
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
        />
      )}
    </div>
  );
};

export default ListProducts;
