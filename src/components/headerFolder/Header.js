import React from 'react'
import SearchBox from './SearchBox'

const Header = () => {
    return (
        <div className='header'>
            <div className="head-top">
                <p className="welcome">Welcome</p>
                <p className="others">Millions of movies, TV shows and people to discover. Explore now</p>
            </div>
            <div className="search-bar">
                <SearchBox />
            </div>
        </div>
    )
}

export default Header
