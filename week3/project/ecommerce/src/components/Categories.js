import Spinner from "./Loader/Loader";

const Categories = ({ handleList, categories, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <ul className="categories">
      {categories.map((item, index) => {
        return (
          <li
            key={index}
            className="categoryItem"
            onClick={() => {
              handleList(item);
            }}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
