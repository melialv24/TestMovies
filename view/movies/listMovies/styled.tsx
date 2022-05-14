import styled, { css } from 'styled-components'

export const MiniCard = styled.div`
    display: flex;
`
export const H1 = styled.h1`
    font-size: 28px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    letter-spacing: .2px;
    text-align: center;
`
export const BoxContainer = styled.div`
    padding: 30px; 
    width: 100%; 
    margin: auto; 
    background-color: rgb(23, 23, 23);
    display: flex; 
    flex-wrap: wrap; 
    justify-content: space-between;
`
export const BoxImage = styled.div`
    padding: 25px; 
    text-align: center; 
    max-width: 200px;

`
export const SpanLink = styled.span`
    background-color: #625bee;
    padding: 10px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 15px;
    :hover{
        background-color: #948FFF;
    }

`
export const Container = styled.div`
    background: linear-gradient(rgba(23, 23, 23, 0) 0%, rgb(23, 23, 23) 100%), linear-gradient(270deg, rgb(83, 76, 218) 0%, rgb(222, 141, 152) 100%);
    height: 80px;
`
export const H4 = styled.h4`   
    display: block; 
    white-space: nowrap; 
    text-overflow: ellipsis; 
    overflow: hidden; 
    color: white; 
    font-family: sans-serif; 
    letter-spacing: 1px;

    `