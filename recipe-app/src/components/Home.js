import React, { useState } from "react";
import Axios from "axios";
import Results from "./Results";
import "./Home.css";

const Home = () => {
  const [search, setSearch] = useState("");
  const updateSearch = (event) => {
    setSearch(event.target.value.toLowerCase());
  };
  const [results, setResults] = useState("");

  const url = `https://api.edamam.com/search?q=${search}&app_id=${appID}&app_key=${apiKey}&from=0&to=12`;

  const getRecipes = async (event) => {
    event.preventDefault();
    const result = await Axios.get(url);
    setResults(result);
    console.log(results);
  };

  return (
    <div id="home">
      <form className="form-inline" onSubmit={getRecipes}>
        <div className="form-group mx-sm-3 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Ingredient"
            onChange={updateSearch}
          />
        </div>
        <button type="submit" className="btn btn-primary mb-2">
          Search
        </button>
      </form>
      {results ? <Results results={results} /> : ""}
    </div>
  );
};

export default Home;
