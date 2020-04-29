import React from 'react';

import Chat from './myPic/chat.png';
import Coin from './myPic/coin.png';
import Deliver from './myPic/f-delivery.png';

function Guarantee(props) {
	const services = [
		{
			img: `${Deliver}`,
			title: 'Free Shipping',
			description:
				'ut commodo enim euismod. Nulla sem magna, consequat ut diam at, dignissim ornare ex. Vivamus ut neque eu lacus tempus pulvinar. Cras et maximus leo. '
		},
		{
			img: `${Coin}`,
			title: '100% MoneyBack',
			description:
				'ut commodo enim euismod. Nulla sem magna, consequat ut diam at, dignissim ornare ex. Vivamus ut neque eu lacus tempus pulvinar. Cras et maximus leo. '
		},
		{
			img: `${Chat}`,
			title: 'Online Support 24/7',
			description:
				'ut commodo enim euismod. Nulla sem magna, consequat ut diam at, dignissim ornare ex. Vivamus ut neque eu lacus tempus pulvinar. Cras et maximus leo. '
		}
	];

	const service = services.map((serv, index) => (
		<div className="service" key={index}>
			<img src={serv.img} alt={serv.title} />
			<h2>{serv.title}</h2>
			<p>{serv.description}</p>
		</div>
	));
	return (
		<div>
			<h2>Perfect customer service!</h2>
			<div>{service} </div>
		</div>
	);
}

export default Guarantee;
