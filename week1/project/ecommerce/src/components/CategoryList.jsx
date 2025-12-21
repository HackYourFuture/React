function CategoryList({ categories, onSelectCategory, selectedCategory }) {
    return (    
        <div className="category-list">
            {categories.map((category) => (
                <button
                    key={category.id}
                    onClick={() => onSelectCategory(category)}
                    className={selectedCategory === category.name ? "active" : ""}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}   

export default CategoryList;
