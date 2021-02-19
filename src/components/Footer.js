import React from 'react'
import logo from '../resources/logo.svg'
import './Footer.scss';

export default function Footer() {
	return (
		<div className="footer">
			<img width='150' src={logo} alt="logo"/>
			<div className='bottom-line'></div>
		</div>
	)
}