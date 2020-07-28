import React from 'react'
import SearchBox from '../search-folder/SearchBox'
import { HeaderStyle } from './HeaderStyle'

const Header = () => {
    return (
        <HeaderStyle>
            <div className="container">
                <div className="head-top">
                    <h3 className="welcome">Welcome</h3>
                    <p className="others">Millions of movies, TV shows and people to discover. Explore now</p>
                </div>
                <div className="search-bar">
                    <SearchBox />
                </div>
            </div>
        </HeaderStyle>
    )
}

export default Header
/*

*/
