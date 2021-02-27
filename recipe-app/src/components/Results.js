import React from "react";
import "./Results.css";

const Results = (props) => {
  const resultsDisplay = () => {
    if (props.results.data) {
      let recipes = props.results.data.hits;
      return recipes.map((item) => {
        return (
          <div className="card" style={{ width: "98%" }}>
            <img
              className="card-img-top"
              src={item.recipe.image}
              alt={item.recipe.label}
              style={{ width: "100%" }}
            />
            <div className="card-body">
              <h4 className="card-title">{item.recipe.label}</h4>
              <p className="card-text">
                <b>Calories:</b>{" "}
                {Math.round(item.recipe.calories).toLocaleString("en")}
              </p>
              <p className="card-text">
                <b>Allergy Notes: </b>{" "}
                <ul>
                  {item.recipe.healthLabels.map((ingredient) => {
                    return <li>{ingredient}</li>;
                  })}
                </ul>
              </p>
              <p className="card-text">
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
              <a href="#" className="btn btn-primary">
                See Recipe
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
