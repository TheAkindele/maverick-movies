import styled from 'styled-components'

export const FormStyle = styled.div`
    width: 100%;
    padding: 3vw 0;
`

export const ResultStyle = styled.div`
    width: 100%;
    min-height: 90vh;
    background: lightsteelblue;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h4{
        text-align: center;
        @media (max-width: 760px) {
            font-size: 1.3rem;
            font-weight: 200;
        }
    }

    .result{
        width: 90%;
        margin: 1vw auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 30vh;
        border: 1px solid white;
        @media (max-width: 768px) {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: auto;
        }

        .image{
            width: 30%;
            height: 100%;
            @media (max-width: 768px) {
                align-self: center;
                width: 100%;
                max-height: 30%;
            }

            .photo{
                height: 100%;
                width: 100%;
            }
        }
        .content{
            width: 68%;
            height: 100%;
            padding-left: 20px;
            @media (max-width: 768px) {
                width: 100%;
                font-size: small;
                font-weight: lighter;
            }
        }
    }
`

export const SearchLink = styled.div`
    width: 100%;
`