import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header className="w-full" />
      <Home className="w-full" />
    </div>
  );
}

export default App;
