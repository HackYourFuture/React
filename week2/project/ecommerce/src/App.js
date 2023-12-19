import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../src/App.css";
import Home from "./pages/Home";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "product:id" },
]);

const App = () => {
  // const [category, setCategory] = useState("");

  // const toggleCategory = (value) => {
  //   setCategory(category === value ? "" : value);
  // };

  // let products = productsData;
  // if (category !== "") {
  //   products = productsData.filter((product) => {
  //     return `FAKE: ${product.category}` === category;
  //   });
  // }

  return <RouterProvider router={router} />;
};

export default App;
