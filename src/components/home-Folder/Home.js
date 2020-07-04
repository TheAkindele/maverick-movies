import React from 'react'
import Header from '../headerFolder/Header'
import MoviesPreview from '../preview-folder/MoviesPreview'

const Home = () => {
    return (
        <div className='homepage'>
            <Header />
            <MoviesPreview />
        </div>
    )
}

export default Home
