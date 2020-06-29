import React from 'react'
import { Link } from 'react-router-dom'
import { FaChevronDown, FaBars } from 'react-icons/fa'

const NavBar = () => {
    return (
        <div className='navbar'>
            <Link to='/' className="logo">
                maverickMOVIES
            </Link>
            <div className="nav-menu">
                <div className="home nav-bar">
                    <Link to='/' className='link'>HOME</Link>
                </div>
                <div className="dropdown nav-bar">
                    <div className="dropdown-btn link">
                        MOVIES
                        <FaChevronDown />
                    </div>
                    <div className="dropdown-content">
                        <Link to='/popular' className='content'>Popular</Link>
                        <Link to='top-rated' className='content'>Top-Rated</Link>
                        <Link to='upcoming' className='content'>Upcoming</Link>
                    </div>
                </div>
                <div className='nav-bar'>
                    <Link to='/login' className='link'>SignIn</Link>
                </div>
            </div>
            <div className="nav-icon"><h2><FaBars /></h2></div>
        </div>
    )
}

export default NavBar
