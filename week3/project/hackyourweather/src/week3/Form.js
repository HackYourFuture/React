import React from 'react';

function Form({ onChange, onSubmit }) {
	return (
		<div>
			<form action="" onSubmit={onSubmit}>
				<input className="inputCity" type="text" onChange={onChange} placeholder="Search City" />

				<button className="submitBtn" type="submit">
					Search
				</button>
			</form>
		</div>
	);
}

export default Form;
