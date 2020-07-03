import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { stateObjectToArray, selectCategory } from '../../utility-folder/utility'
import { getSelectedMovie } from '../../redux/actions/moviesAction'

const Collections = ({ categoryMovies, getSelectedMovie }) => {
    const { category, content } = categoryMovies

    return (
        <div className='category-box'>
            <div className="category-name">
                {category}
            </div>
            <div className="category-grid">
                {
                    content.map(({ id, poster_path, title, release_date }) => (
                        <div className="category-card" key={id} onClick={() => getSelectedMovie(id)}>
                            <Link to={`/movie/${id}/${title}`} className='link'>
                                <div className="image">
                                    <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt="poster" />
                                </div>
                                <div className="card-footer">
                                    <div className="the-title">
                                        {title}
                                    </div>
                                    <div className="the-date">{release_date}</div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const { allMoviesReducer } = state
    const theProps = ownProps.match.params.category

    return {
        categoryMovies: selectCategory(stateObjectToArray(allMoviesReducer), theProps)
    }
}

export default connect(mapStateToProps, { getSelectedMovie })(withRouter(Collections))
