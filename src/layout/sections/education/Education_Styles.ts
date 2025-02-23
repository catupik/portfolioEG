import {theme} from "../../../styles/Theme.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {font} from "../../../styles/Common.tsx";

const Education = styled.section`

    background-color: ${theme.colors.secondaryBg};
    display: flex;
    padding: 100px 0;
    
`

//education block
const Year = styled.h2`
    ${font({ weight: 600, Fmax: 26, Fmin: 26, color: `${theme.colors.fontDark}`})};
    text-align: center;
    margin-bottom: 50px;
    position: relative;
    z-index: 2;
    
    &:before{
        content: '';
        
        position: absolute;
        height: 24px;
        width: 24px;
        border: 1px solid ${theme.colors.fontDark};
        background-color: white;
        rotate: 45deg;
        bottom: -130%;
        left: 48%;
        transform: translateX(-50%);
        z-index: 2;

        @media ${theme.media.tablet} {
            left: 135%;
            bottom: -25%;
            
        }
    }
`

const EducationBlock = styled.div`
    max-width: 260px;
    width: 100%;
    padding: 100px 0 100px;

    @media ${theme.media.tablet} {
        padding: 50px 0 50px;
        max-width: 100%;
        ${FlexWrapper}{
            flex-direction: row;
            align-items: center;
            gap: 60px;
            max-width: max-content;
        }
        
        
    }

    
`

const EducationWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    gap: 34px;
    
    &:after {
        content: '';
        height: 8px;
        background-color: ${theme.colors.accent};
        position: absolute;
        width: 80%;
        top: 150px;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        @media ${theme.media.tablet} {
            width: 8px;
            height: 80%;
            top: 48%;
            left: 84px;
        }
        
    }
    @media ${theme.media.tablet} {
        flex-direction: column;

    }

`

const Text = styled.p`
    ${font({ weight: 600, lineHeight: '185%', Fmax: 18, Fmin: 18, color: `${theme.colors.fontGrey}`})};
    text-align: center;
    @media ${theme.media.tablet} {
        text-align: left;
    }
    
`
export const S = {
    Education,
    Year,
    EducationBlock,
    Text,
    EducationWrapper

}