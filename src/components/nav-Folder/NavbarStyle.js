import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavWrap = styled.div`
    width: 100%;
`

export const LogoStyle = styled(Link)`
    @media (max-width: 760px) {
        font-size: small;
    }
`

