import allCategories from "../fake-data/all-categories";

const categories = ({ setCategory }) => {
  return allCategories.map((category) => {
    return (
      <button
        key={category}
        className={"category button"}
        onClick={(event) => {
          setCategory(event.target.outerText);
        }}
      >
        {category}
      </button>
    );
  });
};

export default categories;
