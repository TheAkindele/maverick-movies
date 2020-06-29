import React from 'react'

const SearchBox = () => {
    return (
        <div className='search-box'>
            <form >
                <input type="text" placeholder='search for a movie or TV show' />
                <button className='btn-1'>search</button>
            </form>
        </div>
    )
}

export default SearchBox
