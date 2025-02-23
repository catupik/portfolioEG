import styled, {css} from "styled-components";
import {theme} from "../../../../styles/Theme.tsx";


const TabMenu = styled.nav`
    
    ul {
        display: flex;
        //gap: 30px;
        justify-content: space-between;
        max-width: 365px;
        width: 100%;
        margin: 0 auto 50px;
    }
`
const ListItem = styled.li`
    position: relative;
    padding-left: 20px;
    
   

    // &::before {
    //     content: "•"; 
    //     color: ${theme.colors.accent}; 
    //     font-size: 20px;
    //     position: absolute;
    //     left: -10px; 
    // }
    // &:last-child::after {
    //     content: "•";
    //     color: ${theme.colors.accent};
    //     font-size: 20px;
    //     margin-left: 15px; 
    // }
`

const Link = styled.a<{active?: boolean}>`
    font-family: "Source Sans 3", sans-serif;
    font-weight: 400;
    font-size: 20px;
    letter-spacing: 0.01em;
    position: relative;
    display: inline-block;
    cursor: pointer;
    transition:  ${theme.animations.transition};

    &:hover{
        color: ${theme.colors.accent};
        transition: transform ${theme.animations.transition};
        transform: translateY(-4px);
        display: inline-block
    }
    
    ${props => props.active && css<{active?: boolean}>`
        &::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -5px;
            width: 100%;
            height: 2px;
            background: ${theme.colors.accent};
            
            
            transform: scaleX(1);
        }
    ` }
   
`

export const S = {
    TabMenu,
    ListItem,
    Link,
}