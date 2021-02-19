import './Header.scss';
import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../resources/logo.svg'

export default function Header () {
	
	return (
		<div className="header">
			<nav className="d-flex">
				<NavLink to='/'><img src={logo} alt="logo"/></NavLink>
				<div className="d-flex ">
					<h2 className="about-us"><NavLink activeClassName="active-nav" to='/about-us'>Про Нас</NavLink></h2>
					<h2><NavLink activeClassName="active-nav" to='/about-project'>Про Проект</NavLink></h2>
				</div>
			</nav>
		</div>
	)
}