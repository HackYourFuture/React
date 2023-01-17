import React from "react";
import ProductList from './components/products/ProductList';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/products/ProductDetail";
function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
