import styled from "styled-components";
import {TabMenu} from "./tabMenu/TabMenu.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Project} from "./project/Project.tsx";
import p1 from "../../../assets/images/p1.webp";
import p2 from "../../../assets/images/p2.webp";
import p3 from "../../../assets/images/p3.webp";
import p4 from "../../../assets/images/p4.webp";
import p5 from "../../../assets/images/p5.webp";
import p6 from "../../../assets/images/p6.webp";
import p7 from "../../../assets/images/p7.webp";
import p8 from "../../../assets/images/p8.webp";
import p9 from "../../../assets/images/p9.webp";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.tsx";


const worksItems = ['All', 'React', 'JS']

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle titleText={"Projects"}/>
                <TabMenu menuItems={worksItems}></TabMenu>

                <FlexWrapper gapI={'20px'} wrap={"wrap"} justifyC={"center"} alignI={"center"}>
                    <Project technology={"JS"} projectName={"ultra jot Coffee"} projectImage={p1}/>
                    <Project technology={"JS"} projectName={"ultra jot Coffee"} projectImage={p2}/>
                    <Project technology={"JS"} projectName={"ultra jot Coffee"} projectImage={p3}/>
                    <Project technology={"JS"} projectName={"ultra jot Coffee"} projectImage={p4}/>
                    <Project technology={"JS"} projectName={"ultra jot Coffee"} projectImage={p5}/>
                    <Project technology={"JS"} projectName={"ultra jot Coffee"} projectImage={p6}/>
                    <Project technology={"JS"} projectName={"ultra jot Coffee"} projectImage={p7}/>
                    <Project technology={"JS"} projectName={"ultra jot Coffee"} projectImage={p8}/>
                    <Project technology={"JS"} projectName={"ultra jot Coffee"} projectImage={p9}/>

                </FlexWrapper>
<BtnWrapper>
                <Button margin={"118px 0 0"} btnType={"outlined"} alignSelf={"center"}>view portfolio</Button>

</BtnWrapper>

            </Container>

        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    
    background-color: white;
    @media ${theme.media.tablet} {
        ${Button}{
            display: none;
        }
    }
    
`

const BtnWrapper = styled.div`
display: flex;
justify-content: center;`
