import {Logo} from "../../components/logo/Logo.tsx";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu.tsx";
import {MobileMenu} from "./headerMenu/MobileMenu/MobileMenu.tsx";
import {S} from './Header_Styles.ts'
import React, {useEffect, useState} from "react";



export const Header: React.FC = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakPoint = 768;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (

        <S.Header>
            <Container>
                <FlexWrapper justifyC="space-between" alignI="center">
                    <Logo/>

                    {width < breakPoint? <MobileMenu /> :  <DesktopMenu /> }


                </FlexWrapper>

            </Container>
        </S.Header>

    );
};



