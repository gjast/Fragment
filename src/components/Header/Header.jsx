import React from 'react'
import './Header.css'
import {link} from '/img/Link.png'
export default function Header() {
	return (

			<div className="header">
				<div className="header__left">
					<img src={link} alt="link" className="header__left-link"/>
				</div>
			</div>
	)
}
