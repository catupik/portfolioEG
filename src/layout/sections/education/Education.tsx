import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {EducationBlock} from "./educationblock/EducationBlock.tsx";
import {theme} from "../../../styles/Theme.tsx";
import {Container} from "../../../components/Container.tsx";


export const Education = () => {
    return (
        <StyledEducation>
            <Container>
                <FlexWrapper direction="column" justifyC="space-around">
                <SectionTitle paddingTop={"120px"}
                    titleText={"Education"}
                              underTextFirstLine={"Continuously learning and evolving in front-end"}
                              underTextSecondaryLine={"development since 2022"}

                />

                <FlexWrapper justifyC={"center"} alignI={"center"} gapI={"34px"}>
                    <EducationBlock year={"2022"} education={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua."}
                                    lineLeft={"85%"} lineWidth={"80%"}
                    />

                    <EducationBlock year={"2023"} education={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua."}/>

                    <EducationBlock year={"2024"} education={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua."}/>

                    <EducationBlock year={"2025"} education={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua."}
                                    lineLeft={"-5%"} lineWidth={"100%"}/>
                </FlexWrapper>
                </FlexWrapper>
            </Container>


        </StyledEducation>
    );
};

const StyledEducation = styled.section`
   
    background-color: ${theme.colors.secondaryBg};
    display: flex;
    
    @media ${theme.media.tablet} {
        ${FlexWrapper}:nth-of-type(2) {
            flex-direction: column;
            
        }
`