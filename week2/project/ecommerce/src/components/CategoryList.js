import { useState, useEffect } from "react";

const CategoryList = ({ selectedCategory, onToggle }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function fetchCategories() {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Can not fetch data!");
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  if (loading) {
    return <h2>loading...</h2>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <div id="category-list">
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => onToggle(category)}
            className={category === selectedCategory ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
