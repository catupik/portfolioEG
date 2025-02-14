import {theme} from "../../styles/Theme.tsx";
import styled from "styled-components";

const Footer = styled.footer`
    background-color: ${theme.colors.primaryBg};
    display: flex;
    padding: 20px 0;
    
`

const SocialList = styled.ul`
   display: flex;
    
`
const SocialItem = styled.li`
   display: flex;
    justify-content: center;
    align-items: center;
`
const SocialLink = styled.a`
   color: ${theme.colors.iconGrey};
    cursor: pointer;
    
    &:hover {
        color: ${theme.colors.accent};
        transition-duration: 1s;
        transform: translateY(-4px);
    }
    
   `

const Copyright = styled.small`
    white-space: nowrap;
    color: ${theme.colors.iconGrey};
        span:first-child{
            color: ${theme.colors.accent};
        }
        span:last-child{
            color: white;
        }
`

export const S = {
    Footer,
    SocialList,
    SocialLink,
    SocialItem,
    Copyright,
}