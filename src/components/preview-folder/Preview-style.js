import styled from 'styled-components'

export const PreviewBoxStyle = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`

export const PreviewStyle = styled.div`
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .previews{
        width: 100%;

        .row{
            width: 100%;
            
            .col{
                

                .card{
                    border: 5px solid grey;
                    
                    .card-action{
                        
                        .title{
                            @media (max-width: 480px) {
                        font-size: smaller;
                        font-weight: 200;
                            }
                        }
                        .date{
                            @media (max-width: 480px) {
                        font-size: smaller;
                        font-weight: 100;
                            }
                        }
                    }
                }
            }
        }
    }
`

export const PreviewCategory = styled.div`
    height: 10%;
    font-size: 1.9rem;
    font-weight: 500;
    padding: 2vw 0;
    color: white;
    @media (max-width: 760px) {
        font-size: 1.4rem;
        font-weight: 200;
    }
`