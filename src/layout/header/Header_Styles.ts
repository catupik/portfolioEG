import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";

const Header = styled.header`
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    padding: 25px 0 25px;
    background-color: rgba(0, 0, 0, 0.47);
    

   
        @media ${theme.media.tablet} {
            padding: 10px 0 10px;
     }

`

export const S = {
    Header,
}