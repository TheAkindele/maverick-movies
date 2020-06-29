import { GET_POPULAR, GET_TOP_RATED, GET_UPCOMING } from '../actions/moviesAction'

export const initState = {
    popularMovies: [],
    upcomingMovies: [],
    topRatedMovies: []
}

export const moviesReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_POPULAR:
            //console.log('popular= ', action.payload)
            return {
                ...state,
                popularMovies: {
                    id: 1,
                    category: 'Popular Movies',
                    routeName: 'popular-movies', content: action.payload
                }
                //popularMovies: [{ ...state.popularMovies, movies: action.payload }]
            }

        case GET_TOP_RATED:
            //console.log('top rated= ', action.payload)
            return {
                ...state,
                topRatedMovies: { id: 2, category: 'Top Rated Movies', routeName: 'top-rated-movies', content: action.payload }
                //topRatedMovies: [...state.topRatedMovies, action.payload]
            }

        case GET_UPCOMING:
            //console.log('upcoming= ', action.payload)
            return {
                ...state,
                upcomingMovies: { id: 3, category: 'Upcoming Movies', routeName: 'upcoming-movies', content: action.payload }
                //upcomingMovies: [...state.upcomingMovies, action.payload]
            }

        default:
            return state
    }
}