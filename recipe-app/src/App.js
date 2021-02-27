import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <Router>
      <div className="App">
        <SearchBar />
      </div>
    </Router>
  );
}

export default App;
