import "./index.scss";

const Card = ({ data }) => {
  const getIngredients = () => {
    let ingredients = [];

    for (let i = 1; i <= 15; i++) {
      let ingredient = data[`strIngredient${i}`];

      if (ingredient !== null) {
        ingredients.push(ingredient);
      }
    }

    return ingredients;
  };

  return (
    <div className="Card">
      <img src={data.strDrinkThumb} alt={data.strDrink} />
      <div className="Card__text">
        <h2>{data.strDrink}</h2>
        <ul>
          {getIngredients().map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
