import React from 'react';
import DogPhoto from './dogPhoto/dogPhoto';
import Joker from './joker/joker';
import NewFriend from './newFriend/newFriend';
function App() {
	return (
		<div className="col">
			<NewFriend />
			<hr />
			<DogPhoto />
			<hr />
			<Joker />
		</div>
	);
}
export default App;
