import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSearchedMovie } from '../../redux/actions/moviesAction'
import { withRouter } from 'react-router-dom'
import { FormStyle } from './SearchStyles'

class SearchBox extends Component {
    state = {
        movieSearch: ''
    }

    handleChange = (e) => {
        this.setState({
            movieSearch: e.target.value
        })
    }

    handleSubmit = (e) => {
        const { movieSearch } = this.state
        const { history, match } = this.props
        e.preventDefault()
        this.props.getSearchedMovie(movieSearch)
        //console.log('search= ', movieSearch)
        history.push(`${match.url}search/${movieSearch}`)

    }

    render() {
        return (
            <FormStyle>
                <div className='container search-box'>
                    <div className="row">
                        <form className='input-field col s12' onSubmit={this.handleSubmit}>
                            <input id="first_name" type="text" className="validate white-text " onChange={this.handleChange} />
                            <label htmlFor="first_name">Search Movie here...</label>
                            <button className='btn col s12'>Search</button>
                        </form>
                    </div>
                </div>
            </FormStyle>
        )
    }
}

export default connect(null, { getSearchedMovie })(withRouter(SearchBox))
