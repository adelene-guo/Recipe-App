import React from "react";

const Results = (props) => {
  const resultsDisplay = () => {
    if (props.results.data) {
      let recipes = props.results.data.hits;
      return recipes.map((item) => {
        return (
          <>
            <h3>{item.recipe.label}</h3>
            <h4>Diet: {item.recipe.dietLabels}</h4>
            <h4>Cautions</h4>
            <ul>
              {item.recipe.cautions.map((ingredient) => {
                return <li>{ingredient}</li>;
              })}
            </ul>
            <h4>Allergie Notes</h4>
            <ul>
              {item.recipe.healthLabels.map((ingredient) => {
                return <li>{ingredient}</li>;
              })}
            </ul>
            <img src={item.recipe.image} alt={`${item.recipe.label} Image`} />
            <h4>Ingredients</h4>
            <ul>
              {item.recipe.ingredientLines.map((ingredient) => {
                return <li>{ingredient}</li>;
              })}
            </ul>
          </>
        );
      });
    }
  };

  return <>{resultsDisplay()}</>;
};

export default Results;
