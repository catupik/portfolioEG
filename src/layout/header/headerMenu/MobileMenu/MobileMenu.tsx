import {Menu} from "../menu/Menu.tsx";
import {S} from './../HeaderMenu_Styles.ts'
import {useState} from "react";

export const MobileMenu: React.FC = () => {

    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen);
    }
    return (
        <S.MobileMenu>
            <S.BurgerMenu isOpen={menuIsOpen} onClick={onBurgerBtnClick}><span></span></S.BurgerMenu>

            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={()=>{setMenuIsOpen(false)}}>
                <Menu />
            </S.MobileMenuPopup>

        </S.MobileMenu>
    );
};

