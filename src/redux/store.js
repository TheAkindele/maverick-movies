import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
//import logger from 'redux-logger'
import rootReducer from './reducers/rootReducer'

const middlewares = [thunk]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store

// https://image.tmdb.org/t/p/w154/1Duc3EBiegywczxTWekvy03HWai.jpg

// https://api.themoviedb.org/3/configuration?api_key=37ad0cf97af435a0a03c6e3da5f19502

// imageURL = `https://image.tmdb.org/t/p/${poster_path}`

// video =  https://api.themoviedb.org/3/movie/297762/videos?api_key=###&language=en-US