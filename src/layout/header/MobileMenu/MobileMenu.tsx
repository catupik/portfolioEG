import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme.tsx";

export const MobileMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMobileMenu>
            <BurgerMenu isOpen={true}><span></span></BurgerMenu>

            <MobileMenuPopup isOpen={false}>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return <ListItem key={index}>
                            <Link href="#">{item}</Link>
                        </ListItem>
                    })}

                </ul>
            </MobileMenuPopup>

        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    display: none;
    
    @media ${theme.media.tablet} {
        display: block;
    }

`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1000;
    background-color: rgb(37, 37, 37, 0.9);
    display: none;
    
    ${props => props.isOpen && css<{isOpen: boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`
const BurgerMenu = styled.button<{isOpen: boolean}>`
    position: fixed;
    height: 50px;
    width: 50px;
    top: 0;
    right: 0;
    z-index: 9999999;
  
    
    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.secondaryBg};
        position: absolute;
        left: 50%;
        bottom: 40%;

        ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color: rgba(255, 255, 255, 0);

    `}
        
        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.secondaryBg};
            position: absolute;
            //left: 50%;
            //bottom: 50%;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(-45deg) translateY(0);

    `}
        }
        
        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color:  ${theme.colors.secondaryBg};
            position: absolute;
            //left: 50%;
            //bottom: 50%;
            transform: translateY(10px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(45deg) translateY(0);
                width: 36px;

    `}
        }
    
`

const ListItem = styled.li`
    
    position: relative;
    
    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -5px; 
        width: 100%;
        height: 2px; 
        background: ${theme.colors.accent};
        transform: scaleX(0);
        transition: transform 0.7s ease-in-out;
    }

    &:hover::after {
        transform: scaleX(1);
    }
`
const Link = styled.a`
    font-family: "Source Sans 3", sans-serif;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.02em;
    color: ${theme.colors.fontLight};
`