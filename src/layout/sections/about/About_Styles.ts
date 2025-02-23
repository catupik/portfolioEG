import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {font} from "../../../styles/Common.tsx";

const About = styled.section`
    background-color: white;
    display: flex;
    
`
const TextWrapper = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1079px) {

        width: 100%;
        ${FlexWrapper} {
            flex-direction: row;
        }
    }
    
    
    
`
const Text = styled.p`
    ${font({ weight: 400, lineHeight: '185%', Fmax: 20, Fmin: 16, color: `${theme.colors.fontGrey}` })}
  
    margin: 5px 0 20px;
    width: 100%;

   
`
const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    
`

const Photo = styled.img`
    height: 400px;
    width: 400px;
    object-fit: cover;
    
    @media ${theme.media.tablet} {
       
        height: 100%;
        width: 100%;
    }
  
`

export const S = {
    About,
    Text,
    TextWrapper,
    Photo,
    PhotoWrapper,
}