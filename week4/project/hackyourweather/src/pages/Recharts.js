import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'


function Recharts() {
    const {id} = useParams()
    
    const [city, setCity] = useState({})
    const [list,setList] = useState({})
    const [isWrong, setIsWrong] = useState(false)

    useEffect(() => {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`)
            .then(res => {
                const info = res.data
                const city = info.city
                const list = info.list[0]
                setCity(city)
                setList(list)
            })
            .catch((err) => {
                setIsWrong(true)
                console.log(err)
            })
    }, [id])

    return (
        <div className="recharts">
            <div className="back_div">
                <Link to="/">
                    <button type="submit" className="back_btn">Back</button>
                </Link>
            </div>
            <div>
                {isWrong === true && <h3>Oops something went wrong.</h3>}
                <h3>{city.name} --- {city.country}</h3>
                <Link to="/hourly">
                    <button type="submit" className="hourly_btn">3 Hours</button>
                </Link>
                <Link to="/daily">
                    <button type="submit" className="daily_btn">5 Dais</button>
                </Link>
            </div>

        </div>
    )
}

export default Recharts
