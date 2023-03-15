import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import MiniCard from "../miniCard";
import "./index.css";

const MiniCardList = ({ category }) => {
  const [miniCards, setMiniCards] = useState([]);

  useEffect(() => {
    GET(`/products/category/${category}`).then((data) =>
      setMiniCards(() => data.products)
    );
  }, [category]);

  return (
    <div className="MiniCardList">
      {miniCards.map((card) => (
        <MiniCard imgSrc={card.thumbnail} imgAlt={card.title} key={card.id} />
      ))}
    </div>
  );
};

export default MiniCardList;
