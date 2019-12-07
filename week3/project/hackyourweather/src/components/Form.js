import React from 'react'

function Form(props) {
    return (
            <form className="form" onSubmit={props.getCity} >
                <input type="text"
                    placeholder="Search City"
                    className="search"
                    name="cityName"
                />
                <button className="btn" type="submit" >Search</button>
            </form>
    )
}

export default Form