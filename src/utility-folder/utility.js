
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

export const waitItemId = array => {

}

export const checkArrayId = array => {
    return array.map(item => console.log('item Ids ', item.ID))
}
