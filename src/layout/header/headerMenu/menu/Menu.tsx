import React from 'react';
import {S} from './../HeaderMenu_Styles.ts';

const headerItems = [
    {
        title:"Home" ,
        href: 'main',
    },
    {
        title: "About",
        href: 'about',
    },
    {
        title: "Skills",
        href: 'skills' ,
    },
    {
        title: "Projects" ,
        href: 'projects',
    },
    {
        title: "Contact",
        href: 'contact',
    },
   ];

export const Menu: React.FC = () => {
    return (

        <ul>
            {headerItems.map((item, index) => {
                return <S.MenuItem key={index}>
                    <S.NavLink
                        to={item.href}
                        smooth={true}
                        activeClass="active"
                        spy={true}
                        hashSpy={true}
                        offset={-80} //hook useResize()
                        duration={500}
                    >{item.title}
                    </S.NavLink>
                </S.MenuItem>
            })}

        </ul>
    );
};


