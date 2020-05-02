import React from 'react';

const Button = ({ handles, text }) => {
	return <button onClick={handles}>{text}</button>;
};

export default Button;
