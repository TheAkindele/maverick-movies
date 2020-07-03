import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { stateObjectToArray } from '../../utility-folder/utility'
import Loader from '../Loader'

const MoviesPreview = ({ allMoviesArr }) => {

    return (
        <div className='preview-box'>
            {
                allMoviesArr.length > 0 ?
                    (
                        allMoviesArr.map(({ ID, routeName, category, content }) => (
                            <div className="the-previews" key={ID}>
                                <div className="category" >
                                    <Link to={`/${routeName}`}> {category} </Link>
                                </div>
                                <div className="previews">
                                    {
                                        content && content.slice(0, 5).map(({ id, poster_path, title, release_date }) => (
                                            <Link to={`/${routeName}`} className="card" key={id}>

                                                <div className="image">
                                                    <img src={`https://image.tmdb.org/t/p/w185${poster_path}`} alt="poster" />
                                                </div>
                                                <div className="card-foot">
                                                    <div className="title">
                                                        {title}
                                                    </div>
                                                    <div className="date">{release_date}</div>
                                                </div>

                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    )
                    : (
                        <Loader />
                    )
            }
        </div>
    )
}

const mapStateToProps = ({ allMoviesReducer }) => {
    //console.log('preview array ', stateObjectToArray(allMoviesReducer))

    return {
        allMoviesArr: stateObjectToArray(allMoviesReducer)
    }
}

export default connect(mapStateToProps)(withRouter(MoviesPreview))
