import React from 'react';
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/kasa-logo.png'

function Header() {
	return (
		<header className="header">
			<img src={Logo} alt="Logo de Kasa" className="logoHeader" />
			<nav className="nav">
				<NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Accueil</NavLink>
				<NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>A propos</NavLink>
			</nav>
		</header>
	)
}

export default Header
