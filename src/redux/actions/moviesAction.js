import axios from 'axios'
export const GET_POPULAR = 'GET_POPULAR'
export const GET_TOP_RATED = 'GET_TOP_RATED'
export const GET_UPCOMING = 'GET_UPCOMING'

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
/*
export const getPopular = () => dispatch => {
    // make async call here
    axios(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
        .then(response => {
            console.log('axios popular= ', response.data.results)
            dispatch({
                type: GET_POPULAR,
                payload: response.data.results
            })
        })
        .catch(err => console.log('Error encountered ', err))
}

export const getTopRated = () => dispatch => {
    axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`)
        .then(response => {
            console.log('axios topRated= ', response.data.results)
            dispatch({
                type: GET_TOP_RATED,
                payload: response.data.results
            })
        })
        .catch(err => console.log('Error encountered ', err))
}

export const getUpcoming = () => dispatch => {
    axios(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`)
        .then(response => {
            console.log(' axios upcoming= ', response.data.results)
            dispatch({
                type: GET_UPCOMING,
                payload: response.data.results
            })
        })
        .catch(err => console.log('Error encountered ', err))
}
*/
