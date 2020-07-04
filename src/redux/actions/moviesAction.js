import axios from 'axios'
export const GET_POPULAR = 'GET_POPULAR'
export const GET_TOP_RATED = 'GET_TOP_RATED'
export const GET_UPCOMING = 'GET_UPCOMING'
export const GET_SELECTED_MOVIE = 'GET_SELECTED_MOVIE'
export const GET_VIDEO = 'GET_VIDEO'
export const GET_SEARCHED_MOVIE = 'GET_SEARCHED_MOVIE'

const api_key = '37ad0cf97af435a0a03c6e3da5f19502'

export const getMovies = () => dispatch => {
    /// for popular
    axios(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
        .then(response => {
            //console.log('axios popular= ', response.data.results)
            dispatch({
                type: GET_POPULAR,
                payload: response.data.results
            })
        })
        .catch(err => console.log('Error encountered ', err))

    /// for toprated
    axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`)
        .then(response => {
            //console.log('axios topRated= ', response.data.results)
            dispatch({
                type: GET_TOP_RATED,
                payload: response.data.results
            })
        })
        .catch(err => console.log('Error encountered ', err))

    // for upcoming
    axios(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`)
        .then(response => {
            //console.log(' axios upcoming= ', response.data.results)
            dispatch({
                type: GET_UPCOMING,
                payload: response.data.results
            })
        })
        .catch(err => console.log('Error encountered ', err))
}

export const getSelectedMovie = (movieId) => dispatch => {
    axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=en-US`)
        .then(res => {
            //console.log('the movie= ', res.data)
            dispatch({
                type: GET_SELECTED_MOVIE,
                payload: res.data
            })
        })
        .catch(err => console.log('Error ', err))

    axios(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${api_key}&language=en-US`)
        .then(vid => {
            //console.log('vid details ', vid.data.results)
            dispatch({
                type: GET_VIDEO,
                payload: vid.data.results
            })
        })
        .catch(error => console.log('Error encountered ', error))
}

export const getSearchedMovie = sarchInput => dispatch => {
    axios(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${sarchInput}`)
        .then(result => {
            //console.log('searched result= ', result.data.results)
            dispatch({
                type: GET_SEARCHED_MOVIE,
                payload: result.data.results
            })
        })
        .catch(err => console.log('Error in seraching ', err))
}
