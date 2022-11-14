import styled from 'styled-components'

export const Container = styled.div`
    background-color: white;
    color: #797a81;
    font-family: Verdana;
`;

export const Header = styled.div`
    .nav-list{
        display: flex;
        list-style: none;
        align-items: center;
        background: black;
        width: 100%;
        height: 8vh;
    }

    .nav-list li {
        display: flex;
        letter-spacing: 3px;
        margin-left: 15%;
        color:#fff;
        cursor: pointer;
      }


`;

export const Area = styled.div`
    margin: auto;
`;


export const lista = styled.h1`
    display: flex;
    margin: auto;
    padding-left:10px;
    color: black;
    font-size: 40px;
    margin-top: 20px;
    font-wheight: bold;
      
`;

export const modal = styled.button`
    display: block;
    align-items: center;
    background: transparent;
    outline: 0;
    border: none;
    font-size: 20px;
    flex:1;
`;