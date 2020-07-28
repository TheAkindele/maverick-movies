import styled from 'styled-components'

export const MoviepageStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    
`
export const MovieDetailsStyle = styled.div`
    width: 100%;
    background-color: #757575;

    .container{
        width: 95%;
        .row{
            .movie-title{
                padding: 3vw 0;
                 
            }
            .col{

                img{
                    
                }
            }
            .details{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;

                .tagline{
                    @media (max-width: 600px) {
                        font-size: small;
                        padding: 10px 0;
                    }
                }
                .overview {
                    @media (max-width: 600px) {
                        font-size: smaller;
                        padding: 10px 0;
                    }
                }
            }
        }
    }
`

export const MovieTrailerStyle = styled.div`
    width: 100%;
    padding: 3vw 0;
    
    @media (max-width: 768px) {
        
    }

`

export const ExtraDetails = styled.div`
    width: 100%;
    padding: 3vw 0;
    background-color: #757575;

    .detail-list{
        width: 90%;
        margin: 0 auto;
        list-style: none;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        font-size: larger;

        li{
            @media (max-width: 768px) {
                font-size: smaller;
            }
            span{
                color: red;
            }
        }
    }
`

export const Trailer = styled.div`
    width: 100%;
    padding: 50px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`