import "./index.scss";

const Hero = ({ category, setCategory }) => {
  const onHandleClick = (value) => {
    setCategory(value);
  };

  return (
    <div className="Hero">
      <h1>Cocktail by Edgemony</h1>
      <hr />
      <ul className="Hero__second__list">
        <li
          onClick={() => onHandleClick("Ordinary Drink")}
          className={category === "Ordinary Drink" && "active"}
        >
          Ordinary Drink
        </li>
        <li
          onClick={() => onHandleClick("Cocktail")}
          className={category === "Cocktail" && "active"}
        >
          Cocktail
        </li>
        <li
          onClick={() => onHandleClick("Shot")}
          className={category === "Shot" && "active"}
        >
          Shot
        </li>
        <li
          onClick={() => onHandleClick("Punch / Party Drink")}
          className={category === "Punch / Party Drink" && "active"}
        >
          Punch
        </li>
        <li
          onClick={() => onHandleClick("Coffee / Tea")}
          className={category === "Coffee / Tea" && "active"}
        >
          Coffee
        </li>
      </ul>
    </div>
  );
};

export default Hero;
