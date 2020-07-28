import React from 'react'
import { connect } from 'react-redux'
import { getFirstItem } from '../../utility-folder/utility'
import { MoviepageStyle, MovieDetailsStyle, MovieTrailerStyle, ExtraDetails, Trailer } from './moviePageStyle'
import MovieTrailer from './MovieTrailer'
import { PreLoader } from '../loader-file/Loader'

const MoviePage = ({ clickedMovies, movieVideo }) => {
    //console.log('clicked movie ', clickedMovies)
    const { budget, original_language, title, overview, poster_path, release_date, runtime, status, tagline, revenue, vote_average } = clickedMovies

    return (
        <MoviepageStyle >
            <MovieDetailsStyle>
                <div className="container">
                    <div className="row">
                        <h5 className="movie-title deep-purple-text text-darken-4  center-align">{title}</h5>
                        <div className="col s12 l4 offset-l1">
                            <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt="poster" className='image responsive-img' />
                        </div>
                        <div className="col s12 l6 offset-l1 details ">
                            <p className="tagline yellow-text text-darken-3 flow-text ">{tagline}</p>
                            <p className="overview white-text">{overview}</p>

                        </div>
                    </div>
                </div>
            </MovieDetailsStyle>
            <MovieTrailerStyle>
                <div className="container">
                    <p className='flow-text center-align'> Movie Trailer </p>
                    <Trailer >
                        {
                            movieVideo ?
                                (<MovieTrailer movieVideo={movieVideo} />)

                                : (
                                    <PreLoader />
                                )
                        }
                    </Trailer>
                </div>
            </MovieTrailerStyle>
            <ExtraDetails>
                <ul className="detail-list">
                    <li className="budget">Budget: <span>${budget}</span></li>
                    <li className="revenue">Revenue: <span>${revenue}</span></li>
                    <li className="release">Released: <span>{release_date}</span></li>
                    <li className="language">Language: <span>{original_language}</span> </li>
                    <li className="duration">Duration: <span>{runtime}m</span> </li>
                    <li className="status">status: <span>{status}</span></li>
                    <li className="votes">Votes: <span>{vote_average}</span></li>
                </ul>
            </ExtraDetails>
        </MoviepageStyle>
    )
}

const mapStateToProps = ({ getMovie }) => {
    //console.log('video state ', getMovie.video)
    return {
        clickedMovies: getMovie.movie,
        movieVideo: getFirstItem(getMovie.video)
    }
}

export default connect(mapStateToProps)(MoviePage)
