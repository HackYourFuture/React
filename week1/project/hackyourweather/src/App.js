import React from "react";
import "./App.css";
import Header from "./components/Header"
import CityCard from "./components/cityCard"

function App() {
  return (
    <>
      <Header title="Hack Your Weather"/>
      <CityCard/>
    </>
  );
}

export default App;
