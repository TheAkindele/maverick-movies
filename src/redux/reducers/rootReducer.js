import { combineReducers } from 'redux'
import { allMoviesReducer, getMovie } from './moviesReducer'

const rootReducer = combineReducers({
    allMoviesReducer,
    getMovie
})

export default rootReducer