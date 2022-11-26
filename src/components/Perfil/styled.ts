import styled from 'styled-components'

export const PerfilStyle = styled.div`
    width: 500px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    padding: 25px;
    margin: 5px;
    display: flex;
    align-items: center;
    //gap: 20px;
    background-color: #2f60e7a8;
    div{
        align-items: center;
        text-align: center;
    }
    
    img{
        border-radius: 50%;
        border: 3px solid #346affe0;
        width: 150px;
    }
    
    h3{
        color: #fff;
        font-weight: 700;
    }
    button{
        background-color: #191970;
        display: inline-block; 
        color: #FFF;
        border-radius: 30px;
        border: 3px solid transparent;
        transition: .5s; 
    }
    button:hover {
        text-decoration: none;
        color: #FFF;
        background-color: transparent;
        border-color: #191970;
    }   
    a{
        margin-bottom: 5px;
        text-decoration: none;
        font-weight: bold;
    }
`
