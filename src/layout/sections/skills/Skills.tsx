import styled from "styled-components";
import {Skill} from "./skill/Skill.tsx";

import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {theme} from "../../../styles/Theme.tsx";
import {Container} from "../../../components/Container.tsx";



export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
            <SectionTitle paddingTop={"120px"} textColor={theme.colors.fontLight} titleText={"Skills"} textA={"center"} underTextFirstLine={"Technologies I’ve been working with recently"}
            underTextColor={theme.colors.iconGrey}/>


                <SkillWrapper>
                    <Skill iconId={"html"} iconWidth={"78"} iconHeight={"78"} iconViewBox={"0 0 78 78"} />
                    <Skill iconId={"css"} iconWidth={"78"} iconHeight={"78"} iconViewBox={"0 0 78 78"} />
                    <Skill iconId={"js"} iconWidth={"78"} iconHeight={"78"} iconViewBox={"0 0 78 78"} />
                    <Skill iconId={"react"} iconWidth={"78"} iconHeight={"78"} iconViewBox={"0 0 78 78"} />
                    <Skill iconId={"typescript"} iconWidth={"78"} iconHeight={"78"} iconViewBox={"0 0 78 78"} />
                    <Skill iconId={"redux"} iconWidth={"78"} iconHeight={"78"} iconViewBox={"0 0 78 78"} />
                    <Skill iconId={"styledComponents"} iconWidth={"78"} iconHeight={"78"} iconViewBox={"0 0 78 78"} />
                    <Skill iconId={"mongodb"} iconWidth={"78"} iconHeight={"78"} iconViewBox={"0 0 78 78"} />
                    <Skill iconId={"gitL"} iconWidth={"78"} iconHeight={"78"} iconViewBox={"0 0 78 78"} />
                    <Skill iconId={"express"} iconWidth={"78"} iconHeight={"78"} iconViewBox={"0 0 78 78"} />
                    <Skill iconId={"figma"} iconWidth={"78"} iconHeight={"78"} iconViewBox={"0 0 78 78"} />
                    <Skill iconId={"sass"} iconWidth={"78"} iconHeight={"78"} iconViewBox={"0 0 78 78"} />
                </SkillWrapper>
            </Container>

        </StyledSkills>
    );
};

const StyledSkills = styled.section`
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