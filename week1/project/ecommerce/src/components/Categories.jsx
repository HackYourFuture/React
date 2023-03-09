import './Categories.css';
import Category from './Category'

function Categories ({categories, state, setState}) {
    
    function changeFilter(newCategory) {
        setState(prevState => {
            return {
                selectedCategory: newCategory, 
                isAll: (prevState.selectedCategory === newCategory) && !prevState.isAll
            }
        })
    }
    
    return (
        <div className="categories">
            {categories.map((item, index) => {
                const className = ((item === state.selectedCategory) && !state.isAll ? 'category-selected' : '')
                return <Category key={index} className={className} data={item} onClick={changeFilter} />
            })}
        </div>
    )
}

export default Categories;