import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../src/App.css";
import Home from "./pages/Home";
import ProductDetailsPage from "./pages/ProductDetails";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/product/:id", element: <ProductDetailsPage /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
