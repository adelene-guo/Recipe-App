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
        return <Results results={results} />;
      } else {
        return <p>{results}</p>;
      }
    } else {
      return (
        <div className="rounded border-black w-4/5 md:w-1/3">
          <p className="text-xs md:text-2xl">
            Welcome to the Angel Recipe App. Do you never know what to cook for
            dinner? Tired of cooking the same old bland dinners? Can't find a
            good recipe to fit your dietary needs? Well you've come to the right
            place. For the Recipe Angles to save you, we're going to need you to
            use the search bar above.
          </p>
        </div>
      );
    }
  };

  return (
    <div id="home" className="flex flex-col justify-center items-center">
      <form
        className="flex flex-row justify-between items-center w-1/3"
        onSubmit={getRecipes}
      >
        <div>
          <input
            className="rounded-sm border-black text-sm p-2"
            type="text"
            placeholder="Ingredient"
            onChange={updateSearch}
          />
        </div>
        <select
          id="diet"
          className="rounded-sm border-black text-sm py-2 pr-8"
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
          className="rounded-sm border-black text-sm py-2 pr-8"
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
          className="bg-white hover:bg-blue-500 hover:text-white p-1.5 border border-black rounded-sm"
          type="submit"
        >
          Search
        </button>
      </form>
      <>{displaySearchResults()}</>
    </div>
  );
};

export default Home;
