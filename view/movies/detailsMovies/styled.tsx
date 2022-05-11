import styled, { css } from 'styled-components'


export const Container = styled.div`
    background-color: antiquewhite;
    padding: 30px;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;
    @media only screen and (min-width: 992px) {
        flex-flow: row nowrap;
    }
`
export const BoxImage = styled.div`
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    justify-content: center;
`
export const BoxText = styled.div`
    display: flex; 
    justify-content: flex-start; 
    flex-direction: column;
`
export const H1 = styled.h1`
    text-align: center;
    font-family: sans-serif;
`
export const Text = styled.p`
    text-align: justify;
    font-family: sans-serif;
    line-height: 1.5;
`
export const SpanSubtitle = styled.span`
    font-weight: bold;
    font-family: sans-serif;
    font-size: larger;
`
export const Li = styled.li`
    text-decoration: wavy;
    font-family: sans-serif;
`