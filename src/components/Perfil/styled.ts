import styled from 'styled-components'

export const PerfilStyle = styled.div`
    width: 400px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    padding: 20px;
    margin: 5px;
    display: flex;
    align-items: center;
    gap: 20px;
    background-color: #2f60e7a8;
    img{
        border-radius: 50%;
        border: 3px solid #346affe0;
        width: 80px;
    }
    h3{
        margin-bottom: 8px;
    }
    p{
        margin-bottom: 5px;
    }
`