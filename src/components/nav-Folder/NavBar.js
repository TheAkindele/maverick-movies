import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronDown, FaBars } from 'react-icons/fa'

class NavBar extends Component {
    state = {
        isOpen: false
    }

    openMenu = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
        //console.log('state= ', this.state)
    }

    render() {
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
                            <Link to='/popular_movies' className='content'>Popular</Link>
                            <Link to='/top_rated_movies' className='content'>Top-Rated</Link>
                            <Link to='/upcoming_movies' className='content'>Upcoming</Link>
                        </div>
                    </div>
                    <div className='nav-bar'>
                        <Link to='/spin' className='link'>SignIn</Link>
                    </div>
                </div>
                <div className="nav-icon" onClick={this.openMenu}><h2><FaBars /></h2></div>

                <div className={this.state.isOpen ? 'open' : 'closed'}>
                    <h4><Link to='/'>HOME</Link></h4>
                    <h4><Link to='/popular_movies'>Popular Movies</Link></h4>
                    <h4><Link to='/top_rated_movies'>Top-Rated Movies</Link></h4>
                    <h4><Link to='/upcoming_movies'>Upcoming Movies</Link></h4>
                </div>
            </div>
        )
    }
}

export default NavBar
