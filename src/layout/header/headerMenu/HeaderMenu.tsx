import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";

export const HeaderMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item, index)=>{
                    return <ListItem key={index}>
                        <Link href="#">{item}</Link>
                    </ListItem>
                })}

            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }

    @media ${theme.media.tablet} {
        display: none;
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