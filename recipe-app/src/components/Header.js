import React from "react";
import logo from "../logo.png";

const Header = () => {
  return (
    <header className="flex flex-row justify-center items-center my-8 w-full">
      <img className="w-24" src={logo} alt="Logo" />
      <h1 className="text-4xl font-semibold">Angel Recipe App</h1>
    </header>
  );
};

export default Header;
