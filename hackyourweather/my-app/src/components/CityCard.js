import React, { useEffect, useState } from 'react';
import CityName from './CityName';
import axios from 'axios';
import WeatherInfo from './WeatherInfo';
import Details from './Details';
import data from '../data.json';
import Button from './Button';
import SearchBox from './SearchBox';
import { kelvinToCelsius } from 'temperature';

const APIKEY = process.env.REACT_APP_API_KEY;

function CityCard() {
	const [ data, setData ] = useState({});
	const [ city, setCity ] = useState('Amsterdam');
	const [ inputValue, setInputValue ] = useState('');
	const [ error, setError ] = useState(false);

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`;

	useEffect(
		() => {
			const fetchData = async () => {
				try {
					const result = await axios(url);
					setData(result.data);
					setError(false);
					console.log(data, 'data');
				} catch (err) {
					console.log(err);
					setError(true);
				}
			};
			fetchData();
		},
		[ city ]
	);
	function handleChange(e){
		setInputValue(e.target.value);
	}
	function handleButton() {
		setCity(inputValue);
	}

	return (
		<div>
			<div>
				<SearchBox
					handleChange={handleChange}
					placeholder={'Search City...'}
				/>
				<Button 
				handleButton={handleButton} 
				type={'submit'} 
				text={'Search'}
				/>
				{error && <p>{city} is not found. Please enter another city...</p>}
			</div>
			<div className="cityCard">
				<CityName name={data.name} />
				<WeatherInfo
					weatherKind={data.weather ? data.weather[0].main : 'uploading'}
					weatherDescription={data.weather ? data.weather[0].description : 'uploading'}
				/>
				<Details
					minTemp={data.main ? kelvinToCelsius(data.main.temp_min).toFixed(1) + '°C' : 'uploading'}
					maxTemp={data.main ? kelvinToCelsius(data.main.temp_max).toFixed(1) + '°C' : 'uploading'}
					lat={data.coord ? data.coord.lat : 'loading'}
					lon={data.coord ? data.coord.lon : 'loading'}
				/>
			</div>
		</div>
	);
}

export default CityCard;
