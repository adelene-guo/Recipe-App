import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div id="app" className="flex flex-col justify-center items-center w-full">
      <Header />
      <Home />
    </div>
  );
}

export default App;
