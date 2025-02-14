import {Menu} from "../menu/Menu.tsx";
import {S} from './../HeaderMenu_Styles.ts'

export const MobileMenu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
    return (
        <S.MobileMenu>
            <S.BurgerMenu isOpen={false}><span></span></S.BurgerMenu>

            <S.MobileMenuPopup isOpen={false}>
                <Menu menuItems={props.menuItems}/>
            </S.MobileMenuPopup>

        </S.MobileMenu>
    );
};

