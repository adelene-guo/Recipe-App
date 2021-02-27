import React, { useState } from "react";
import Axios from "axios";
import Results from "./Results";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const updateSearch = (event) => {
    setSearch(event.target.value.toLowerCase());
  };
  const [results, setResults] = useState("");

  const url = `https://api.edamam.com/search?q=${search}&app_id=${appID}&app_key=${apiKey}`;

  const getRecipes = async (event) => {
    event.preventDefault();
    const result = await Axios.get(url);
    setResults(result);
    console.log(results);
  };

  return (
    <>
      <form onSubmit={getRecipes}>
        <input type="text" value={search} onChange={updateSearch} required />
        <button type="submit">Enter</button>
      </form>
      {results ? <Results results={results} /> : ""}
    </>
  );
};

export default SearchBar;
