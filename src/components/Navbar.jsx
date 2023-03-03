import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {links} from '../data'
import {GoThreeBars} from 'react-icons/go'


import './navbar.css'
import Logo from '../images/logo.png'

const Navbar = () => {
  return (
    <nav>
        <div className='container nav_container'>
            <Link to="/" className='logo'>
                <img src={Logo} alt="Nav Logo"></img>
            </Link>
            <ul className='nav__links'>
                {
                    links.map(({name, path}, index) => {
                        return(
                            <li>
                                <NavLink to={path}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <button className='nav__toggle-btn'>
                <GoThreeBars/>
            </button>
        </div>
    </nav>
  )
}

export default Navbar