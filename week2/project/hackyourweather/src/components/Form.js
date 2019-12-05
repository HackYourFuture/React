import React, { useState } from 'react'

function Form(props) {
    const [cityName, setCityName] = useState(" ")

    function handleCityName(e) {
        setCityName(e.target.value)
    }

    const handleSubmit = (e) => {
        props.onSubmitForm({ cityName })
        e.preventDefault()
        setCityName(" ")
    }


    return (
        <form className="form" onSubmit={e => handleSubmit(e)} >
            <input type="text"
                placeholder="Search City"
                className="search" 
                onChange={(e) => handleCityName(e)}
                value={cityName}
            />
            <input className="btn"
                type="submit"
                value="Search"
            />
        </form>
    )
}

export default Form