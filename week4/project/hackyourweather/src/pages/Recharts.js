import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { AreaChart, Area, XAxis, YAxis, Tooltip,CartesianGrid, ResponsiveContainer } from 'recharts'


function Recharts() {
    const { id } = useParams()
    const [city, setCity] = useState([])
    const [list, setList] = useState({})
    const [isWrong, setIsWrong] = useState(false)

    useEffect(() => {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`)
            .then(res => {
                const info = res.data
                const city = info.city
                const list = info.list
                setCity(city)
                setList(list)
            })
            .catch((err) => {
                setIsWrong(true)
                throw new Error(err)
            })
    }, [id])

    return (
        <div className="recharts">
            <div className="back_div">
                <Link to="/">
                    <button type="submit" className="back_btn">Back</button>
                </Link>
            </div>

            <div className="info_chart" >
                {isWrong === true && <h3>Oops something went wrong.</h3>}
                <h3>{city.name} --- {city.country}</h3>
                <ResponsiveContainer>
                    <AreaChart data={list} >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="dt_txt" />
                        <YAxis />
                        <Tooltip  />
                        <Area type="monotone" dataKey="main.temp" strok="#daf800" fill="#7099e6" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

        </div>
    )
}

export default Recharts
