import React from 'react'
import { connect } from 'react-redux'
import { getFirstItem } from '../../utility-folder/utility'
import ReactPlayer from 'react-player'
import Loader from '../Loader'

const MoviePage = ({ clickedMovies, movieVideo }) => {
    const { backdrop_path, budget, original_language, title, overview, poster_path, release_date, runtime, status, tagline, revenue, production_companies, vote_average } = clickedMovies
    const backdrop = `https://image.tmdb.org/t/p/w1280${backdrop_path}`

    return (
        <div className='movie-page' >
            <div className="backdrop" style={{ backgroundImage: `url(${backdrop})` }}>
                <div className='top'>
                    <div className="poster">
                        <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt="poster" className='poster-img' />
                    </div>
                    <div className="right">
                        <div className="movie-title">{title}</div>
                        <ul className="detail-list">
                            <li className="release">Released: <span>{release_date}</span></li>
                            <li className="language">Language: <span>{original_language}</span> </li>
                            <li className="duration">Duration: <span>{runtime}m</span> </li>
                            <li className="status">status: <span>{status}</span></li>
                            <li className="votes">Votes: <span>{vote_average}</span></li>
                        </ul>
                        <div className="about">
                            <div className="tagline">{tagline}</div>
                            <div className="overview">{overview}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="trailer-box">
                <p>See Movie Trailer Here</p>
                <div className="video">
                    {
                        movieVideo ?
                            (<div className='player-wrapper'>
                                <ReactPlayer
                                    className='react-player'
                                    url={`https://www.youtube.com/watch?v=${movieVideo.key}`}
                                    width='100%'
                                    height='100%'
                                    controls={true}
                                />
                            </div>)

                            : <Loader />
                    }
                </div>
            </div>
            <div className="details">
                <div className="expenses">
                    <div className="budget">Budget: ${budget}</div>
                    <div className="revenue">Revenue: ${revenue}</div>
                </div>
                <div className="companies">
                    <h2>produced by</h2>
                    {
                        production_companies && production_companies.map(({ id, logo_path, name, origin_country }) => (
                            <div className="company" key={id}>
                                <div className="logo">
                                    <img src={`https://image.tmdb.org/t/p/w92${logo_path}`} alt="logo" />
                                </div>
                                <div className="company-info">
                                    <div className="the-name"> {name}</div>
                                    <div className="location"> {origin_country}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
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
