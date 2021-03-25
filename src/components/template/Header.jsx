import './Header.css'
import React from 'react'
import logo from '../../assets/icon.png'

export default props =>
	<header className="header">
	<img src={logo} alt="logo" />
		<div className="title">
		
			Squad management tool
		
		</div>
		<div className="icon">
			User Login
		</div>
	</header>