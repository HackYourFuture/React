import React from 'react'; 


function SearchBox({handleChange, placeholder}) {
    return <input  type="text" id="input" onChange={handleChange} placeholder={placeholder} / >
}


export default SearchBox; 