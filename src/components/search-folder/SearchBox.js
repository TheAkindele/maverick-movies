import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSearchedMovie } from '../../redux/actions/moviesAction'
import { withRouter } from 'react-router-dom'

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
            <div className='search-box'>
                <form onSubmit={this.handleSubmit}>
                    <input type="search" name='search' placeholder='search for a movie or TV show' onChange={this.handleChange} />
                    <button className='btn-1'>Search</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { getSearchedMovie })(withRouter(SearchBox))
