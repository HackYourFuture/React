import './Categories.css';
import Category from './Category'

function Categories ({categories, state, setState}) {
    
    function changeFilter(newCategory) {
        setState(prevState => {
            return {
                selectCategory: newCategory, 
                isAll: (prevState.selectCategory === newCategory) && !prevState.isAll
            }
        })
    }
    
    return (
        <div className="categories">
            {categories.map((item, index) => {
                const className = ((item === state.selectCategory) && !state.isAll ? 'category-select' : '')
                return <Category key={index} className={className} data={item} onClick={changeFilter} />
            })}
        </div>
    )
}

export default Categories;