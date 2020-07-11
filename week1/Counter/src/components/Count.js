import React from 'react';

const Count = ({ CounState }) => {
	return CounState <= 10 ? (
		<p> Keep counting... {CounState} </p>
    ) : (
		<p>  {CounState} It's higher than 10 </p>
	);
};

export default Count;