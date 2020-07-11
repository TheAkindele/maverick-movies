import React from 'react'
import { connect } from 'react-redux'
import { stateObjectToArray } from '../../utility-folder/utility'
import { PreviewBoxStyle, PreviewStyle, PreviewCategory } from './Preview-style'
import { Link } from 'react-router-dom'

const MoviesPreview = ({ allMoviesArr }) => {
    //console.log('movies ', allMoviesArr)

    return (
        <PreviewBoxStyle>
            {
                allMoviesArr && allMoviesArr.map(({ ID, routeName, category, content }) => (
                    <PreviewStyle key={ID}>

                        <div className="container previews">
                            <PreviewCategory >
                                {category}
                            </PreviewCategory>
                            <div className="row" >
                                {
                                    content && content.slice(0, 4).map(({ id, poster_path, title, release_date }) => (
                                        <div className="col s10 l3 offset-s1">
                                            <div className="card" key={id}>
                                                <div className="card-image">
                                                    <Link to={`/${routeName}`}>
                                                        <img src={`https://image.tmdb.org/t/p/w154${poster_path}`} alt="poster" />
                                                    </Link>
                                                </div>
                                                <div className="card-action">
                                                    <h6 className="title red-text text-accent-4">
                                                        {title.length >= 18 ? (title.slice(0, 18) + '...') : title}
                                                    </h6>
                                                    <p className="date">{release_date}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </PreviewStyle>

                ))
            }

        </PreviewBoxStyle>
    )
}

const mapStateToProps = ({ allMoviesReducer }) => {

    return {
        allMoviesArr: stateObjectToArray(allMoviesReducer)
    }
}

export default connect(mapStateToProps)(MoviesPreview)
