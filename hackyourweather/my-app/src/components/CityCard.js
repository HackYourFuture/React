import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Input from './Input'
import { kelvinToCelsius } from 'temperature'
import City from './City'


function CityCard () {
  const [city, setCity] = useState('Amsterdam')
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState(false)
  const [searchedCities, setSearchedCities] = useState([])



  useEffect(() => {
  const APIKEY = process.env.REACT_APP_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`; 
    const fetchData = async () => {
      try {
        const result = await axios(url)
        setSearchedCities(s=> s.concat(result.data))
        console.log(result.data);
        setError(false)
      } catch (error) {
        console.log(error)
        setError(true)
      }
    }
	fetchData()
	
  }, [city])
  


  function handleInput (e) {
	setInputValue(e.target.value)
  }

  function handleSubmit (e) {
	e.preventDefault(); 
	setCity(inputValue);
	e.target.reset();
  }

  function handleClose (id) {
    // e.preventDefault()
    console.log(id);
    const remainingCities = searchedCities.filter(city => {
        return city.id !== id}) 
        setSearchedCities(remainingCities); 
    console.log("handleClose -> remainingCities", remainingCities)
      
      } ; 

    //

  //   // console.log('hanlde', e.target)
  //   // const cityToDelete =
  //   //   e.currentTarget.nextSibling.firstElementChild.textContent; 
  //   // console.log(cityToDelete);
  //   // const remainingCities = searchedCities.filter(city => {
  //   //   return city.name !== cityToDelete
  //   // })
  //   // setSearchedCities(remainingCities)
  // }

  return (
    <div className="wrapper">
	  <Input
		 handleInput={handleInput}
		 disabled={!inputValue}
		 handleSubmit={handleSubmit}
         type={'submit'}
		 buttonName={'Search'}
	  /> 
	  {error && <p className="danger"> "{city}" is not found.<br></br> Please enter another city</p>}
      <div>
        {searchedCities.length === 0 ? (
          <div>
            <p>You have no cities left! </p>
            <h2>Please type a city...</h2>
          </div>
        ) : (
          searchedCities
            .slice(0)
            .reverse()
            .map((data) => {
              return (
                <City
                  key={data.id}
                  id={data.id}
                  handleClose={handleClose}
                  name={data.name}
                  country={data.sys}
                  weatherKind={data.weather ? data.weather[0].main : 'loading'}
                  weatherDescription={
                    data.weather ? data.weather[0].description : 'loading'
                  }
                  minTemp={
                    data.main
                      ? kelvinToCelsius(data.main.temp_min).toFixed(1) + '°C'
                      : 'loading'
                  }
                  maxTemp={
                    data.main
                      ? kelvinToCelsius(data.main.temp_max).toFixed(1) + '°C'
                      : 'loading'
                  }
                  lat={data.coord ? data.coord.lat : 'loading'}
                  lon={data.coord ? data.coord.lon : 'loading'}
                />
              )
            })
        )}
      </div>
    </div>
  )
}

export default CityCard
