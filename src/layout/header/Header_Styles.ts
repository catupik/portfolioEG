import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";

const Header = styled.header`
    position: absolute;
    z-index: 100;
    background: transparent;
    top: 0;
    left: 0;
    right: 0;
    padding: 44px 0 0;
    
    // @media ${theme.media.tablet} {
    //     padding: 30px 0 0;
    // }
   
`

export const S = {
    Header,
}