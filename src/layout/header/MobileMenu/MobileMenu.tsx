import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {Menu} from "../menu/Menu.tsx";

export const MobileMenu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMobileMenu>
            <BurgerMenu isOpen={false}><span></span></BurgerMenu>

            <MobileMenuPopup isOpen={false}>
                <Menu menuItems={props.menuItems}/>
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
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    height: 45px;
    width: 45px;
    top: 55px;
    right: 20px;
    z-index: 9999999;
    background-color: ${theme.colors.accent};
    
    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.secondaryBg};
        position: relative;
        //left: 50%;
        //bottom: 40%;
        
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

