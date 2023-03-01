import './categories.css';
import ecategory from "../fake-data/all-categories" 
function Category (prop) {
    return (
        <div class="categories--item">{prop}</div>
    )
}
function CategoryList  (prop) {
    return (<div class="categories">
        {
            ecategory.map(item=>Category(item))
        }
    </div>
    )
}
export default CategoryList;

