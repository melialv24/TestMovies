import styled, { css } from 'styled-components'
import { TCol } from './types'


export const Col = styled.div<TCol>`
    display: flex;
    flex-flow: column;
    ${({ height }) => height && css`height: ${height};`}
    ${({ bgColor }) => bgColor && css`background-color: ${bgColor};`}
    // Small
    @media only screen and (max-width: 576px) {
        max-width: 100%;
        flex: 0 0 100%;
        ${({ xs }) => xs === 'xs-0' && css`max-width: 0%; flex: 0 0 0%;`}
        ${({ xs }) => xs === 'xs-1' && css`max-width: 8.33%; flex: 0 0 8.33%;`}
        ${({ xs }) => xs === 'xs-2' && css`max-width: 16.66%; flex: 0 0 16.66%;`}
        ${({ xs }) => xs === 'xs-3' && css`max-width: 25%; flex: 0 0 25%;`}
        ${({ xs }) => xs === 'xs-4' && css`max-width: 33.33%; flex: 0 0 33.33%;`}
        ${({ xs }) => xs === 'xs-5' && css`max-width: 41.66%; flex: 0 0 41.66%;`}
        ${({ xs }) => xs === 'xs-6' && css`max-width: 50%; flex: 0 0 50%;`}
        ${({ xs }) => xs === 'xs-7' && css`max-width: 58.33%; flex: 0 0 58.33%;`}
        ${({ xs }) => xs === 'xs-8' && css`max-width: 66.66%; flex: 0 0 66.66%;`}
        ${({ xs }) => xs === 'xs-9' && css`max-width: 75%; flex: 0 0 75%;`}
        ${({ xs }) => xs === 'xs-10' && css`max-width: 83.33%; flex: 0 0 83.33%;`}
        ${({ xs }) => xs === 'xs-11' && css`max-width: 91.66%; flex: 0 0 91.66%;`}
    }
    // Small
    @media only screen and (min-width: 576px) {
        ${({ sm }) => sm === 'sm-0' && css`max-width: 0%; flex: 0 0 0%;`}
        ${({ sm }) => sm === 'sm-1' && css`max-width: 8.33%; flex: 0 0 8.33%;`}
        ${({ sm }) => sm === 'sm-2' && css`max-width: 16.66%; flex: 0 0 16.66%;`}
        ${({ sm }) => sm === 'sm-3' && css`max-width: 25%; flex: 0 0 25%;`}
        ${({ sm }) => sm === 'sm-4' && css`max-width: 33.33%; flex: 0 0 33.33%;`}
        ${({ sm }) => sm === 'sm-5' && css`max-width: 41.66%; flex: 0 0 41.66%;`}
        ${({ sm }) => sm === 'sm-6' && css`max-width: 50%; flex: 0 0 50%;`}
        ${({ sm }) => sm === 'sm-7' && css`max-width: 58.33%; flex: 0 0 58.33%;`}
        ${({ sm }) => sm === 'sm-8' && css`max-width: 66.66%; flex: 0 0 66.66%;`}
        ${({ sm }) => sm === 'sm-9' && css`max-width: 75%; flex: 0 0 75%;`}
        ${({ sm }) => sm === 'sm-10' && css`max-width: 83.33%; flex: 0 0 83.33%;`}
        ${({ sm }) => sm === 'sm-11' && css`max-width: 91.66%; flex: 0 0 91.66%;`}
        ${({ sm }) => sm === 'sm-12' && css`max-width: 100%; flex: 0 0 100%;`}
    }
    // Medium
    @media only screen and (min-width: 768px) {
        ${({ md }) => md === 'md-0' && css`max-width: 0%; flex: 0 0 0%;`}
        ${({ md }) => md === 'md-1' && css`max-width: 8.33%; flex: 0 0 8.33%;`}
        ${({ md }) => md === 'md-2' && css`max-width: 16.66%; flex: 0 0 16.66%;`}
        ${({ md }) => md === 'md-3' && css`max-width: 25%; flex: 0 0 25%;`}
        ${({ md }) => md === 'md-4' && css`max-width: 33.33%; flex: 0 0 33.33%;`}
        ${({ md }) => md === 'md-5' && css`max-width: 41.66%; flex: 0 0 41.66%;`}
        ${({ md }) => md === 'md-6' && css`max-width: 50%; flex: 0 0 50%;`}
        ${({ md }) => md === 'md-7' && css`max-width: 58.33%; flex: 0 0 58.33%;`}
        ${({ md }) => md === 'md-8' && css`max-width: 66.66%; flex: 0 0 66.66%;`}
        ${({ md }) => md === 'md-9' && css`max-width: 75%; flex: 0 0 75%;`}
        ${({ md }) => md === 'md-10' && css`max-width: 83.33%; flex: 0 0 83.33%;`}
        ${({ md }) => md === 'md-11' && css`max-width: 91.66%; flex: 0 0 91.66%;`}
        ${({ md }) => md === 'md-12' && css`max-width: 100%; flex: 0 0 100%;`}
    }
    // Large
    @media only screen and (min-width: 992px) {
        ${({ lg }) => lg === 'lg-0' && css`max-width: 0%; flex: 0 0 0%;`}
        ${({ lg }) => lg === 'lg-1' && css`max-width: 8.33%; flex: 0 0 8.33%;`}
        ${({ lg }) => lg === 'lg-2' && css`max-width: 16.66%; flex: 0 0 16.66%;`}
        ${({ lg }) => lg === 'lg-3' && css`max-width: 25%; flex: 0 0 25%;`}
        ${({ lg }) => lg === 'lg-4' && css`max-width: 33.33%; flex: 0 0 33.33%;`}
        ${({ lg }) => lg === 'lg-5' && css`max-width: 41.66%; flex: 0 0 41.66%;`}
        ${({ lg }) => lg === 'lg-6' && css`max-width: 50%; flex: 0 0 50%;`}
        ${({ lg }) => lg === 'lg-7' && css`max-width: 58.33%; flex: 0 0 58.33%;`}
        ${({ lg }) => lg === 'lg-8' && css`max-width: 66.66%; flex: 0 0 66.66%;`}
        ${({ lg }) => lg === 'lg-9' && css`max-width: 75%; flex: 0 0 75%;`}
        ${({ lg }) => lg === 'lg-10' && css`max-width: 83.33%; flex: 0 0 83.33%;`}
        ${({ lg }) => lg === 'lg-11' && css`max-width: 91.66%; flex: 0 0 91.66%;`}
        ${({ lg }) => lg === 'lg-12' && css`max-width: 100%; flex: 0 0 100%;`}
    }
    // Extra Large
    @media only screen and (min-width: 1200px) {
        ${({ xl }) => xl === 'xl-0' && css`max-width: 0%; flex: 0 0 0%;`}
        ${({ xl }) => xl === 'xl-1' && css`max-width: 8.33%; flex: 0 0 8.33%;`}
        ${({ xl }) => xl === 'xl-2' && css`max-width: 16.66%; flex: 0 0 16.66%;`}
        ${({ xl }) => xl === 'xl-3' && css`max-width: 25%; flex: 0 0 25%;`}
        ${({ xl }) => xl === 'xl-4' && css`max-width: 33.33%; flex: 0 0 33.33%;`}
        ${({ xl }) => xl === 'xl-5' && css`max-width: 41.66%; flex: 0 0 41.66%;`}
        ${({ xl }) => xl === 'xl-6' && css`max-width: 50%; flex: 0 0 50%;`}
        ${({ xl }) => xl === 'xl-7' && css`max-width: 58.33%; flex: 0 0 58.33%;`}
        ${({ xl }) => xl === 'xl-8' && css`max-width: 66.66%; flex: 0 0 66.66%;`}
        ${({ xl }) => xl === 'xl-9' && css`max-width: 75%; flex: 0 0 75%;`}
        ${({ xl }) => xl === 'xl-10' && css`max-width: 83.33%; flex: 0 0 83.33%;`}
        ${({ xl }) => xl === 'xl-11' && css`max-width: 91.66%; flex: 0 0 91.66%;`}
        ${({ xl }) => xl === 'xl-12' && css`max-width: 100%; flex: 0 0 100%;`}
    }
`
export const Header = styled.header`
    height: 50px;
`
export const BoxHeader = styled.div`
    padding: 0px 25px;
`
export const TextH = styled.p`
    color: #625bee; 
    font-family: sans-serif; 
    letter-spacing: .2px;
`