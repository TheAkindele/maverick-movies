
export const stateObjectToArray = (thestate) => {
    return Object.keys(thestate).map(key => thestate[key])
}

export const selectCategory = ((element, theProps) => {
    if (element) {
        return element.find(item => item.routeName === theProps)
    }
    else {
        return console.log('element is empty')
    }
})

export const getFirstItem = (theArray) => {
    if (theArray) {
        return theArray.find(item => item.type === 'Trailer')
    }
    else return 'No video Found'
}

/*
const state = {
    popular_movies: {
        id: 1,
        category: '',
        routeName: '',
        content: []
    },
    upcoming_movies: {
        id: 1,
        category: '',
        routeName: '',
        content: []
    },
    top_rated_movies: {
        id: 1,
        category: '',
        routeName: '',
        content: []
    }
}
*/
