import React from "react";

const Results = (props) => {
  const resultsDisplay = () => {
    if (props.results.data) {
      let recipes = props.results.data.hits;
      return recipes.map((item) => {
        return (
          <div className="recipe-container">
            <div className="left-side">
              <img src={item.recipe.image} alt={item.recipe.label} />
              <h4>{item.recipe.label}</h4>
              <p>
                <b>Calories:</b>{" "}
                {Math.round(item.recipe.calories).toLocaleString("en")}
              </p>
              <p>
                <b>Allergy Notes: </b>{" "}
                <ul>
                  {item.recipe.healthLabels.map((ingredient) => {
                    return <li>{ingredient}</li>;
                  })}
                </ul>
              </p>{" "}
              <p>
                <b>Dietary Cautions: </b>{" "}
                <ul>
                  {item.recipe.cautions.length ? (
                    item.recipe.cautions.map((ingredient) => {
                      return <li>{ingredient}</li>;
                    })
                  ) : (
                    <li>None</li>
                  )}
                </ul>
              </p>
            </div>
            <div className="right-side">
              <h4>Ingredients</h4>
              <ul>
                {item.recipe.ingredients.map((item) => {
                  return <li>{item.text}</li>;
                })}
              </ul>
              <a
                href={`https://www.youtube.com/results?search_query=how+to+make+${encodeURIComponent(
                  item.recipe.label
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                How to make {item.recipe.label}
              </a>
            </div>
          </div>
        );
      });
    }
  };

  return <div id="results">{resultsDisplay()}</div>;
};

export default Results;
