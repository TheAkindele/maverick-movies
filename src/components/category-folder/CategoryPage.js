import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { stateObjectToArray, selectCategory } from '../../utility-folder/utility'
import { getSelectedMovie } from '../../redux/actions/moviesAction'
import { CategoryStyle } from './CategoryStyle'

const Collections = ({ categoryMovies, getSelectedMovie }) => {
    const { category, content } = categoryMovies

    return (
        <CategoryStyle>
            <div className="category-name">
                {category}
            </div>
            <div className="container category-grid">
                <div className="row">
                    {
                        content.map(({ id, poster_path, title, release_date }) => (
                            <div className="col s10 l3 offset-s1">
                                <div className="card" key={id} onClick={() => getSelectedMovie(id)}>
                                    <Link to={`/movie/${id}/${title}`} className='link'>
                                        <div className="card-image">
                                            <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt="poster" />
                                        </div>
                                        <div className="card-action">
                                            <h6 className="the-title black-text align-center">
                                                {title.length >= 18 ? (title.slice(0, 18) + '...') : title}
                                            </h6>
                                            <p className="the-date">{release_date}</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </CategoryStyle>
    )
}

const mapStateToProps = (state, ownProps) => {
    const { allMoviesReducer } = state
    //console.log('categories ', allMoviesReducer)
    const theProps = ownProps.match.params.category

    return {
        categoryMovies: selectCategory(stateObjectToArray(allMoviesReducer), theProps)
    }
}

export default connect(mapStateToProps, { getSelectedMovie })(withRouter(Collections))
