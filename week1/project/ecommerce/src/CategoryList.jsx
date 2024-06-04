// import React from 'react';

// function CategoryList({ categories, activeCategory, setActiveCategory }) {
//   return (
//     <div className="category-list">
//       <button
//         className={activeCategory === 'FAKE: all' ? 'active' : ''}
//         onClick={() => setActiveCategory('FAKE: all')}
//       >
//         All
//       </button>
//       {categories.map(category => (
//         <button
//           key={category}
//           className={activeCategory === category ? 'active' : ''}
//           onClick={() => setActiveCategory(category)}
//         >
//           {category}
//         </button>
//       ))}
//     </div>
//   );
// }

// export default CategoryList;





import React from 'react';

const CategoryList = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div class="category-list">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={category === activeCategory ? 'active' : ''}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
