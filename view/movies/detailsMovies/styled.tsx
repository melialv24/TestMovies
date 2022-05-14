import styled, { css } from 'styled-components'
import { TContainer } from './types'


export const Container = styled.div<TContainer>`
    padding: 30px;
    display: flex;
    height: 100%;
    position: relative;
    align-items: center;
    background-image: linear-gradient(rgb(23, 23, 23), rgba(23, 23, 23, 0.5)), url( https://image.tmdb.org/t/p/w500/${({ image }) => image });
    justify-content: center;
    flex-flow: column nowrap;
`
export const BoxImage = styled.div`
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    justify-content: center;
`
export const BoxText = styled.div`
    background-color: #1F1E3170;
    margin: 10px;
    padding: 20px;
    border-radius: 20px;
    display: flex; 
    justify-content: flex-start; 
    flex-direction: column;
`
export const H1 = styled.h1`
    color: white;
    letter-spacing: 2px;
    text-align: center;
    font-family: sans-serif;
    text-shadow: 5px 2px 2px black;
`
export const Text = styled.p`
    color: white;
    text-align: justify;
    font-family: sans-serif;
    line-height: 1.5;
    letter-spacing: 2px;
    text-shadow: 5px 2px 2px black;
`
export const SpanSubtitle = styled.span`
    color: white;
    text-shadow: 5px 2px 2px black;
    font-weight: bold;
    font-family: sans-serif;
    font-size: larger;
`
export const Li = styled.li`
    color: white;
    text-shadow: 5px 2px 2px black;
    text-decoration: wavy;
    font-family: sans-serif;
`
export const ContainerColor = styled.div`
    background: linear-gradient(rgba(23, 23, 23, 0) 0%, rgb(23, 23, 23) 100%), linear-gradient(270deg, rgb(83, 76, 218) 0%, rgb(222, 141, 152) 100%);
    height: 80px;
`