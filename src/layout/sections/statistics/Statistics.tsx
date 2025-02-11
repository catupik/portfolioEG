import styled from "styled-components";
import {Statistic} from "./statistic/Statistic.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {theme} from "../../../styles/Theme.tsx";
import {Container} from "../../../components/Container.tsx";

export const Statistics = () => {
    return (
        <StyledStatistics>
            <Container>
                <FlexWrapper wrap={"wrap"} justifyC={"space-around"} alignI={"center"}>
                    <Statistic number={"5+"} text={"completed pet projects"}/>
                    <Statistic number={"3+"} text={"3 open-source projects on GitHub"}/>
                    <Statistic number={"1"} text={"commercial project for a client"}/>
                </FlexWrapper>
            </Container>


        </StyledStatistics>
    );
};

const StyledStatistics = styled.section`
    background-color: ${theme.colors.secondaryBg};
    
    @media ${theme.media.tablet} {
        ${FlexWrapper}{
            flex-direction: column;
            align-items: flex-start;
            align-content: center;
        }
    }
    
   
`