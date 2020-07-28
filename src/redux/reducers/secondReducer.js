import { GET_CATEGORIES, GET_CATEGORIES_SUCCESS } from '../actions/secondAction'

export const initState = {
    allcategories: []
}

export const movieState = {
    movie: []
}

export const secondMoviesReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_CATEGORIES_SUCCESS:
            console.log('all categories= ', action.payload)
            return {
                ...state,
                allCategories: action.payload
            }

        default:
            return state
    }
}

/*
export const getMovie = (state = initState, action) => {
    switch (action.type) {
        case GET_SELECTED_MOVIE:
            //console.log('selected movie ', action.payload)
            return {
                ...state,
                movie: action.payload
            }
        default:
            return state
    }
}
*/

/*

*/