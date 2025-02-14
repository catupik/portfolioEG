import {theme} from "../../../styles/Theme.tsx";
import styled from "styled-components";

const Skills = styled.section`
    background-color: ${theme.colors.primaryBg};
`

const SkillWrapper = styled.div`
  
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-template-rows: repeat(2, auto);
    gap: 5px;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${theme.colors.iconGrey};
    
    @media screen and (max-width: 1254px){
        grid-template-columns: repeat(4, minmax(200px, 1fr));
        
    }
    @media ${theme.media.tablet} {
        margin-top: 25px;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
    @media ${theme.media.mobile} {
        grid-template-columns: repeat(2, minmax(150px, 1fr));
    }
    
`

// skill
const Skill = styled.div`
 
    display: flex;
    justify-content: center;
    padding: 84px 0;
    color: ${theme.colors.iconGrey};
    background-color: #252525;
 
}

    @media ${theme.media.tablet} {
        padding: 50px 50px;
    }

    @media ${theme.media.mobile} {
        padding: 40px 30px;
    }
`


export const S = {
    Skills,
    SkillWrapper,
    Skill,
}