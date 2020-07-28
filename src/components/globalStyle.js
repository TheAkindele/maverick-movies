import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle``

export const mediaQueries = () => {
    return (
        <div>

        </div>
    )
}

export const flex = (direction, justify, align) => {
    return (`
            display: flex;
            flex-direction: ${direction};
            justify-content: ${justify};
            align-items: ${align};
        `)
}
