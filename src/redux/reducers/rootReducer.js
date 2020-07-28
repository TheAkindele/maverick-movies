import { combineReducers } from 'redux'
import { allMoviesReducer, getMovie } from './moviesReducer'
//import { secondMoviesReducer } from './secondReducer'

const rootReducer = combineReducers({
    allMoviesReducer,
    getMovie,
    //secondMoviesReducer
})

export default rootReducer