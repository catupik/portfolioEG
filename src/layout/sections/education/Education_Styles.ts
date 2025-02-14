import {theme} from "../../../styles/Theme.tsx";
import styled from "styled-components";
import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {font} from "../../../styles/Common.tsx";

const Education = styled.section`

    background-color: ${theme.colors.secondaryBg};
    display: flex;
    padding: 100px 0;
   
        ${Container}{
            ${FlexWrapper}{
            ${FlexWrapper}:nth-of-type(2) {
                    
                  
                    //align-items: center;
                    //gap: 20px;
                
                @media ${theme.media.tablet} {
                    flex-direction: column;
                   
                }
            }
       
    }
 
   
    

    ${Container}:first-child  {
            position: relative;

            &:after {
                content: '';
                height: 8px;
                background-color: ${theme.colors.accent};
                position: absolute;
                width: 100%;
                top: 100px;
                left: 100px;
                transform: translate(-50%, -50%);
                z-index: 1;

                @media ${theme.media.tablet} {
                    rotate: 90deg;
                    left: -20%;
                    width: 200%;

                }
        }
    }
}
  
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
            bottom: -500%;
            
        }
    }
    
    // &:after{
    //     content: '';
    //     height: 8px;
    //     width: ${props => props.lineWidth || '135%'};
    // 
    //     background-color: ${theme.colors.accent};
    //     position: absolute;
    //     left: ${props => props.lineLeft || '50%'};
    //   
    //     top:160%;
    //     transform: translate(-50%, -50%);
    //     z-index: 1;
    //
    //     @media ${theme.media.tablet} {
    //         rotate: 90deg;
    //         left: -20%;
    //         width: 200%;
    //
    //     }
    // }   
    
`

const EducationBlock = styled.div`
    max-width: 260px;
    width: 100%;
    padding: 100px 0 100px;

    @media ${theme.media.tablet} {
        padding: 50px 0 50px;
        max-width: 500px;
        ${FlexWrapper}{
            flex-direction: row;
            
            align-items: center;
            gap: 20px;
        }
        
        
    }

    
`

const Text = styled.p`
    ${font({ weight: 600, lineHeight: '185%', Fmax: 18, Fmin: 18, color: `${theme.colors.fontGrey}`})};
    text-align: center;
    
`
export const S = {
    Education,
    Year,
    EducationBlock,
    Text,

}