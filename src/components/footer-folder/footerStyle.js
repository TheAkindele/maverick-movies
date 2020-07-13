import styled from 'styled-components'

export const FooterStyle = styled.div`
    width: 100%;
    background: #ff4081;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 2vw 0 1vw 0;

    .socials{
        width: 30%;
        display: flex;
        justify-content: space-between;
        @media (max-width: 760px) {
            width: 70%;
            justify-content: space-around;
        }

        a{
            font-size: 1.9rem;
            color: white;
            @media (max-width: 768px) {
                font-weight: small;
            }
        }
    }
    .powered{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        padding: 0 10px;
        color: black;
        @media (max-width: 760px) {
                padding: 0 1px;
                font-size: smaller;
            }
    }
`
