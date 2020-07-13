import { GET_POPULAR, GET_TOP_RATED, GET_UPCOMING, GET_SELECTED_MOVIE, GET_VIDEO, GET_SEARCHED_MOVIE } from '../actions/moviesAction'

export const initState = {
    popular_movies: {},
    top_rated_movies: {},
    upcoming_movies: {},

}

export const movieState = {
    movie: [],
    video: [],
    searchedMovie: []
}

export const allMoviesReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_POPULAR:
            //console.log('popular= ', action.payload)
            return {
                ...state,
                popular_movies: {
                    ID: 1,
                    category: 'Popular Movies',
                    routeName: 'popular_movies',
                    content: action.payload
                }
            }

        case GET_TOP_RATED:
            //console.log('top rated= ', action.payload)
            return {
                ...state,
                top_rated_movies: {
                    ID: 2,
                    category: 'Top Rated Movies',
                    routeName: 'top_rated_movies',
                    content: action.payload
                }
            }

        case GET_UPCOMING:
            //console.log('upcoming= ', action.payload)
            return {
                ...state,
                upcoming_movies: {
                    ID: 3,
                    category: 'Upcoming Movies',
                    routeName: 'upcoming_movies',
                    content: action.payload
                }
            }

        default:
            return state
    }
}

export const getMovie = (state = movieState, action) => {
    switch (action.type) {
        case GET_SELECTED_MOVIE:
            //console.log('selected movie ', action.payload)
            return {
                ...state,
                movie: action.payload
            }

        case GET_VIDEO:
            return {
                ...state,
                video: action.payload
            }

        case GET_SEARCHED_MOVIE:
            return {
                ...state,
                searchedMovie: action.payload
            }

        default:
            return state
    }
}

