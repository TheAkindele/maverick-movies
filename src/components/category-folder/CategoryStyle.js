import styled from 'styled-components'

export const CategoryStyle = styled.div`
    width: 100%;
    background: rgb(187, 234, 248);

    .category-name{
        padding: 15px 0;
        text-align: center;
        font-size: 2.8rem;
        font-weight: 600;
        @media (max-width: 768px) {
            font-size: 1.9rem;
            font-weight: 300;
            padding: 10px 0;
        }
    }

    .category-grid{
        width: 90%;
        @media (max-width: 760px) {
            width: 100%;
        }
    }
`