import {Menu} from "../menu/Menu.tsx";
import React from "react";
import {S} from './../HeaderMenu_Styles.ts'

export const DesktopMenu : React.FC = () => {
    return (
        <S.DesktopMenu>
            <Menu/>
        </S.DesktopMenu>
    );
};



