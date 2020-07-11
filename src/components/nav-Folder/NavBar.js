import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavWrap } from './NavbarStyle'
import M from 'materialize-css'
import { LogoStyle } from './NavbarStyle'

class NavBar extends Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            const elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems, { edge: 'right' });
        })
    }

    render() {
        return (
            <NavWrap>
                <nav className='pink accent-2'>
                    <div className="nav-wrapper">
                        <div className="container">
                            <div className="brand-logo left">
                                <LogoStyle to='/'>
                                    maverick<span className='deep-purple-text text-darken-4 flow-text'>MOVIES</span>
                                </LogoStyle>
                            </div>
                            <a href="#" data-target="slide-out" className="sidenav-trigger right"><i className="material-icons">menu</i></a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><Link to='/popular_movies' className='content'>Popular</Link></li>
                                <li><Link to='/top_rated_movies' className='content'>Top-Rated</Link></li>
                                <li><Link to='/upcoming_movies' className='content'>Upcoming</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <ul id="slide-out" className="sidenav">
                    <li><Link to='/popular_movies' className='content'>Popular</Link></li>
                    <li><Link to='/top_rated_movies' className='content'>Top-Rated</Link></li>
                    <li><Link to='/upcoming_movies' className='content'>Upcoming</Link></li>
                </ul>
            </NavWrap>
        )
    }
}

export default NavBar


