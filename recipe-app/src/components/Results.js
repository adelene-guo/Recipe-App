import React from "react";

const Results = (props) => {
  const resultsDisplay = () => {
    if (props.results.data) {
      let recipes = props.results.data.hits;
      return recipes.map((item) => {
        return (
          <div className="border-black border-2 rounded p-2 mb-3 flex flex-row items-start bg-white bg-opacity-50 w-full">
            <div className="w-2/5">
              <img
                className="w-9/10"
                src={item.recipe.image}
                alt={item.recipe.label}
              />
              <h2 className="w-9/10 text-2xl font-bold flex flex-wrap">
                {item.recipe.label}
              </h2>
              <p>
                <b>Number of servings:</b> {item.recipe.yield}
              </p>
              <p>
                <b>Calories per serving:</b>{" "}
                {Math.round(
                  item.recipe.calories / item.recipe.yield
                ).toLocaleString("en")}
              </p>
              <p>
                <b>Allergy Notes:</b>{" "}
                <ul>
                  {item.recipe.healthLabels.map((ingredient) => {
                    return <li>{ingredient}</li>;
                  })}
                </ul>
              </p>{" "}
              <p>
                <b>Dietary Cautions:</b>{" "}
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
            <div className="w-3/5">
              <p>
                <b>Ingredients:</b>
              </p>
              <ul>
                {item.recipe.ingredients.map((item) => {
                  return <li className="flex-wrap">{item.text}</li>;
                })}
              </ul>
              <button className="rounded-sm border-black hover:bg-blue-500 border-2 p-2 bg-white bg-opacity-100">
                <a
                  href={`https://www.youtube.com/results?search_query=how+to+make+${encodeURIComponent(
                    item.recipe.label
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Link to how to make {item.recipe.label}
                </a>
              </button>
            </div>
          </div>
        );
      });
    }
  };

  return <>{resultsDisplay()}</>;
};

export default Results;
