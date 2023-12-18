const CategoryList = ({ categories, selectedCategory, onToggle }) => {
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
