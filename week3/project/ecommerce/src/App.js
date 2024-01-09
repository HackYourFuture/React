import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../src/App.css";
import FavoritesProvider from "./context/FavoritesProvider";
import Home from "./pages/Home";
import FavoritesPage from "./pages/Favorites";
import ProductDetailsPage from "./pages/ProductDetails";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/favorites", element: <FavoritesPage /> },
  { path: "/product/:id", element: <ProductDetailsPage /> },
]);

const App = () => {
  return (
    <FavoritesProvider>
      <RouterProvider router={router} />
    </FavoritesProvider>
  );
};

export default App;
