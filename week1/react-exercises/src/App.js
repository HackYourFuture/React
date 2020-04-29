import React from 'react';
import './App.css';
// import RouteParams from './week4/Context/Router/RouteParams';
// import RouteProtect from './week4/Context/Router/RouteProtect';
// import RouteComp from './week4/Context/Router/RouteComp';
// import Context from './week4/Router';
// import Test from './omaq.quymaq/Test';
// import Friend from './week2/Friends/Friend';

// import Week3 from './week3/weather';

import HobbyList from './week1/Extreme hobbies/HobbyList';
import CustServ from './week1/CustService/CustServ';
import Counter from './week1/Counter/Counter';
import Weather from './week1/project/Weather';
// import Friend from './week2/Friends/Friend';

function App() {
	return (
		<div className="App">
			<h1>Week1 Homework</h1>
			<div className="one-Three">
				<div className="ExtremeHobbies">
					<h2>Extreme hobbies</h2>
					<HobbyList />
				</div>

				<div className="counter">
					<h2>Counter</h2>
					<Counter />
				</div>
			</div>
			<hr />
			<div className="CustService">
				<CustServ />
			</div>
			<hr />
			<div className="weahter">
				<h1>Weather</h1>
				<Weather />
			</div>
		</div>
	);
}

export default App;
