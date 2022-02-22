import React from "react";
import "./App.css";

import NavigationBar from "../src/components/NavigationBar";
import MainPage from "./components/pages/MainPage";
import FavoritesPage from "./components/pages/FavoritesPage";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./components/pages/ProductDetails";
import { FavoritesProvider } from "./components/context/FavoritesContext";

function App() {
  return (
    <FavoritesProvider>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </FavoritesProvider>
  );
}

export default App;
