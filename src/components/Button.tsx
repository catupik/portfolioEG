import styled, {css} from "styled-components";
import {theme} from "../styles/Theme.tsx";
import {font} from "../styles/Common.tsx";

type ButtonPropsType = {
    color?: string
    fontSize?: string
    btnType?: "primary" | "outlined"
    alignSelf?: string
    margin?: string
}

export const Button = styled.button<ButtonPropsType>`
    ${font({family: '"Source Sans 3", sans-serif', weight: 600, lineHeight: '185%', Fmax: 16, Fmin: 12 })};
    white-space: nowrap;
    
    letter-spacing: 0.02em;
    text-transform: uppercase;
    align-self: ${props=> props.alignSelf || 'flex-start'};
    height: 64px;
    padding: 20px 48px;
    cursor: pointer;
    margin: ${props => props.margin || '0px'};
    
    ${props => props.btnType === 'outlined' && css<ButtonPropsType>`
        background-color: transparent;
        border: 2px solid ${theme.colors.accent};
        color: ${props => props.color};
    `}
    
    ${props => props.btnType === 'primary' && css<ButtonPropsType>`
        background-color: ${theme.colors.fontDark};
        color: #f5f5f5;
    `}
    
    @media ${theme.media.tablet} {
    height: 54px;
    padding: 14px 32px;
    margin: 25px 0 0;
    
}

    @media ${theme.media.mobile} {
        height: 46px;
        padding: 10px 24px;
    }
`