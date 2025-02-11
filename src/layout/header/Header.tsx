import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {HeaderMenu} from "./headerMenu/HeaderMenu.tsx";
import {MobileMenu} from "./MobileMenu/MobileMenu.tsx";
import {theme} from "../../styles/Theme.tsx";

const headerItems = ["Home", "About", "Skills", "Projects", "Contact"]

export const Header = () => {
    return (

        <StyledHeader>
            <Container>
                <FlexWrapper justifyC="space-between" alignI="center">
                    <Logo/>
                    <HeaderMenu menuItems={headerItems} />
                    <MobileMenu menuItems={headerItems} />
                </FlexWrapper>

            </Container>
        </StyledHeader>

    );
};

const StyledHeader = styled.header`
    position: absolute;
    z-index: 100;
    background: transparent;
    top: 0;
    left: 0;
    right: 0;
    padding: 55px 0 0;
    
    // @media ${theme.media.tablet} {
    //     padding: 30px 0 0;
    // }
   
`

