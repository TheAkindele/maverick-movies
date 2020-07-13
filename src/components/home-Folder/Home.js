import React from 'react'
import SearchBox from '../search-folder/SearchBox'
import MoviesPreview from '../preview-folder/MoviesPreview'
import { HomeStyle } from './HomeStyle'

const Home = () => {
    return (
        <HomeStyle>
            <SearchBox />
            <MoviesPreview />
        </HomeStyle>
    )
}

export default Home
