import React from 'react';

const FOOTER_MESSAGE = "Copyright Nikhil Panchal 2017";

const Footer = ({message}) => {
	message = message ? message : FOOTER_MESSAGE;
	return (
		<div>
			<span className="footer">{message}</span>
		</div>
	)
}

export default Footer