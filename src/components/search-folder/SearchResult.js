import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getSelectedMovie } from '../../redux/actions/moviesAction'

const SearchResult = ({ searchedMovie, getSelectedMovie }) => {
    //console.log('search array= ', searchedMovie)
    return (
        <div className='result-container'>
            <h1>Search Results</h1>
            <div className="result-box">
                {
                    searchedMovie && searchedMovie.map(({ id, title, poster_path, release_date, overview }) => (
                        <div className="result" key={id}>
                            <div className="search-poster" onClick={() => getSelectedMovie(id)}>
                                <Link to={`/movie/${id}/${title}`} className='link'>
                                    <img src={`https://image.tmdb.org/t/p/w92${poster_path}`} alt="searched result" />
                                </Link>
                            </div>
                            <div className="search-details">
                                <div className="search-title">
                                    <div className="title" onClick={() => getSelectedMovie(id)}>
                                        <Link to={`/movie/${id}/${title}`} className='link'>{title} </Link>
                                    </div>
                                    <div className="date">{release_date}</div>
                                </div>
                                <div className="search-overview">
                                    <p className="overview">{
                                        overview.length >= 250 ?
                                            (overview.slice(0, 200) + '...')
                                            : overview
                                    }</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = ({ getMovie }) => {
    //console.log('search state ', getMovie.searchedMovie)
    return {
        searchedMovie: getMovie.searchedMovie
    }
}

export default connect(mapStateToProps, { getSelectedMovie })(SearchResult)
