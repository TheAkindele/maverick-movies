import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getSelectedMovie } from '../../redux/actions/moviesAction'
import { ResultStyle } from './SearchStyles'

const SearchResult = ({ searchedMovie, getSelectedMovie }) => {
    //console.log('search array= ', searchedMovie)
    return (
        <ResultStyle>
            <h4>Search Results</h4>
            {
                searchedMovie && searchedMovie.map(({ id, title, poster_path, release_date, overview }) => (

                    <div className='result' onClick={() => getSelectedMovie(id)} key={id}>
                        <Link to={`/movie/${id}/${title}`} className='image '>
                            <img src={`https://image.tmdb.org/t/p/w154${poster_path}`} alt="search" className='photo' />
                        </Link>
                        <div className="content ">
                            <div className="search-title">
                                <Link to={`/movie/${id}/${title}`} className="title" onClick={() => getSelectedMovie(id)}>
                                    <p className='flow-text red-text text-accent-4'>{title} </p>
                                </Link>
                                <p className="date blue-text">{release_date}</p>
                            </div>
                            <div className="search-overview">
                                <p className="overview">
                                    {
                                        overview.length >= 250 ?
                                            (overview.slice(0, 200) + '...')
                                            : overview
                                    }
                                </p>
                            </div>
                        </div>
                    </div>

                ))
            }
        </ResultStyle>
    )
}

const mapStateToProps = ({ getMovie }) => {
    //console.log('search state ', getMovie.searchedMovie)
    return {
        searchedMovie: getMovie.searchedMovie
    }
}

export default connect(mapStateToProps, { getSelectedMovie })(SearchResult)

//to={`/movie/${id}/${title}`}