import React, { useState } from "react";
import Axios from "axios";
import Results from "./Results";

const Home = () => {
  const [search, setSearch] = useState("");
  const updateSearch = (event) => {
    setSearch(event.target.value.toLowerCase());
  };
  const [diet, setDiet] = useState("");
  const updateDiet = (event) => {
    setDiet(event.target.value);
  };
  const [allergy, setAllergy] = useState("");
  const updateAllergy = (event) => {
    setAllergy(event.target.value);
  };
  const [results, setResults] = useState("");

  const getRecipes = async (event) => {
    event.preventDefault();
    if (diet === "none" && allergy === "none") {
      try {
        const url = `https://api.edamam.com/search?q=${encodeURIComponent(
          search
        )}&app_id=${appID}&app_key=${apiKey}&from=0&to=20`;
        const result = await Axios.get(url);
        setResults(result);
      } catch (error) {
        console.log(error.status);
        setResults("There was an error.");
      }
    } else if (diet !== "none" && allergy === "none") {
      try {
        const url = `https://api.edamam.com/search?q=${encodeURIComponent(
          search
        )}&app_id=${appID}&app_key=${apiKey}&from=0&to=20&diet=${diet}`;
        const result = await Axios.get(url);
        setResults(result);
      } catch (error) {
        console.log(error.status);
        setResults("There was an error.");
      }
    } else if (diet === "none" && allergy !== "none") {
      try {
        const url = `https://api.edamam.com/search?q=${encodeURIComponent(
          search
        )}&app_id=${appID}&app_key=${apiKey}&from=0&to=20&health=${allergy}`;
        const result = await Axios.get(url);
        setResults(result);
      } catch (error) {
        console.log(error.status);
        setResults("There was an error.");
      }
    } else {
      try {
        const url = `https://api.edamam.com/search?q=${encodeURIComponent(
          search
        )}&app_id=${appID}&app_key=${apiKey}&from=0&to=20&diet=${diet}&health=${allergy}`;
        const result = await Axios.get(url);
        setResults(result);
      } catch (error) {
        console.log(error.status);
        setResults("There was an error.");
      }
    }
  };

  const displaySearchResults = () => {
    if (results) {
      if (typeof results === "object") {
        return (
          <div className="w-3/5">
            <Results results={results} />
          </div>
        );
      } else {
        return (
          <p className="rounded border-black border-2 bg-white bg-opacity-50 p-2 w-1/3">
            {results}
          </p>
        );
      }
    } else {
      return (
        <p className="text-2xl rounded border-black border-2 bg-white bg-opacity-50 p-2 w-1/3">
          Welcome to the Angel Recipe App. Do you never know what to cook for
          dinner? Tired of cooking the same old bland meals? Can't find a good
          recipe to fit your dietary needs? Well you've come to the right place.
          For the Recipe Angels to save you, we're going to need you to use the
          search bar above. Data is retrieved from
          developer.edamam.com/edamam-recipe-api
        </p>
      );
    }
  };

  return (
    <div id="home" className="flex flex-col justify-center items-center w-full">
      <form
        className="flex flex-row justify-between items-center mb-8 m-auto"
        onSubmit={getRecipes}
      >
        <input
          className="rounded-sm bg-white bg-opacity-50 border-black p-2 flex flex-row justify-between items-center"
          type="text"
          placeholder="Ingredient"
          onChange={updateSearch}
        />
        <select
          id="diet"
          className="rounded-sm bg-white bg-opacity-50 border-black py-2 pr-8 flex flex-row justify-between items-center"
          value={diet}
          onChange={updateDiet}
          required
        >
          <option value="" defaultValue disabled>
            Select Diet
          </option>
          <option value="none">None</option>
          <option value="balanced">Balanced</option>
          <option value="high-protein">High Protein</option>
          <option value="low-fat">Low Fat</option>
          <option value="low-carb">Low Carb</option>
        </select>
        <select
          id="allergy"
          className="rounded-sm bg-white bg-opacity-50 border-black py-2 pr-8 flex flex-row justify-between items-center"
          value={allergy}
          onChange={updateAllergy}
          required
        >
          <option value="" defaultValue disabled>
            Select Allergy/Health
          </option>
          <option value="none">None</option>
          <option value="alcohol-free">Alcohol Free</option>
          <option value="peanut-free">Peanut Free</option>
          <option value="sugar-conscious">Sugar Conscious</option>
          <option value="tree-nut-free">Tree Nut Free</option>
          <option value="vegan">Vegan</option>
          <option value="vegetarian">Vegetarian</option>
        </select>
        <button
          className="bg-white hover:bg-blue-500 bg-white bg-opacity-100 hover:text-white p-2 border border-black rounded-sm"
          type="submit"
        >
          Search
        </button>
      </form>
      {displaySearchResults()}
    </div>
  );
};

export default Home;
