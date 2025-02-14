
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
import {S} from './Projects_Styles.ts'


const worksItems = ['All', 'React', 'JS']
const projectsData = [
    { technology: "JS", projectName: "Ultra Jot Coffee", projectImage: p1 },
    { technology: "JS", projectName: "Ultra Jot Coffee", projectImage: p2 },
    { technology: "JS", projectName: "Ultra Jot Coffee", projectImage: p3 },
    { technology: "JS", projectName: "Ultra Jot Coffee", projectImage: p4 },
    { technology: "JS", projectName: "Ultra Jot Coffee", projectImage: p5 },
    { technology: "JS", projectName: "Ultra Jot Coffee", projectImage: p6 },
    { technology: "JS", projectName: "Ultra Jot Coffee", projectImage: p7 },
    { technology: "JS", projectName: "Ultra Jot Coffee", projectImage: p8 },
    { technology: "JS", projectName: "Ultra Jot Coffee", projectImage: p9 }
];


export const Projects: React.FC = () => {
    return (
        <S.Projects>
            <Container>
                <SectionTitle titleText={"Projects"}/>
                <TabMenu menuItems={worksItems}></TabMenu>

                <FlexWrapper gapI={'20px'} wrap={"wrap"} justifyC={"center"} alignI={"center"}>
                    {projectsData.map((project, index) => (
                        <Project key={index} technology={project.technology} projectName={project.projectName} projectImage={project.projectImage}/>
                    ))}
                    
                </FlexWrapper>
<S.BtnWrapper>
                <Button margin={"118px 0 0"} btnType={"outlined"} alignSelf={"center"}>view portfolio</Button>

</S.BtnWrapper>

            </Container>

        </S.Projects>
    );
};

