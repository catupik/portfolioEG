import styled from "styled-components";
import {theme} from "../../../../styles/Theme.tsx";



export const TabMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.menuItems.map((item, index)=>{
                    return <ListItem key={index}>
                        <Link href="#">{item}</Link>
                    </ListItem>
                })}

            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
    
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
    
   

    &::before {
        content: "•"; 
        color: ${theme.colors.accent}; 
        font-size: 20px;
        position: absolute;
        left: -10px; 
    }
    &:last-child::after {
        content: "•";
        color: ${theme.colors.accent};
        font-size: 20px;
        margin-left: 15px; 
    }
`

const Link = styled.a`
    font-family: "Source Sans 3", sans-serif;
    font-weight: 400;
    font-size: 20px;
    letter-spacing: 0.01em;

    &:hover{
        color: ${theme.colors.accent};
        transition-duration: 1s;
        transform: translateY(-4px);
        display: inline-block
    }
   
`