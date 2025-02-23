
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Project} from "./project/Project.tsx";
import p1 from "../../../assets/images/p1.webp";
import p2 from "../../../assets/images/p2.webp";
import p3 from "../../../assets/images/p3.webp";
import p4 from "../../../assets/images/p4.webp";
import p5 from "../../../assets/images/p5.webp";
import p6 from "../../../assets/images/p6.webp";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";
import {Container} from "../../../components/Container.tsx";
import {S} from './Projects_Styles.ts'
import {useState} from "react";



const tabsItems: Array<{status: TabsStatusType , title: string}> = [
    {title: "All",
    status: "all"},

    {title: "React",
        status: "react"},
    {title: "JS",
        status: "js"},
]

const projectsData = [
    { technology: "React", projectName: "Ultra Jot Coffee", projectImage: p1, type: 'react' },
    { technology: "React", projectName: "Ultra Jot Coffee", projectImage: p2, type: 'react' },
    { technology: "React", projectName: "Ultra Jot Coffee", projectImage: p3, type: 'react' },
    { technology: "JS", projectName: "Ultra Jot Coffee", projectImage: p4, type: "js" },
    { technology: "JS", projectName: "Ultra Jot Coffee", projectImage: p5, type: "js" },
    { technology: "JS", projectName: "Ultra Jot Coffee", projectImage: p6, type: 'js' },

];


export const Projects: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all");
    let filteredProjects = projectsData;

    if (currentFilterStatus === "react") {
        filteredProjects = projectsData.filter(project => project.type === "react");
    }
    if (currentFilterStatus === "js") {
        filteredProjects = projectsData.filter(project => project.type === "js");
    }

    function changeFilterStatus(value: TabsStatusType){
        setCurrentFilterStatus(value);
    }

    return (
        <S.Projects id="projects">
            <Container>
                <SectionTitle titleText={"Projects"}/>
                <TabMenu
                    changeFilterStatus={changeFilterStatus}
                    currentFilterStatus={currentFilterStatus}
                    tabsItems={tabsItems}></TabMenu>

                <FlexWrapper gapI={'20px'} wrap={"wrap"} justifyC={"center"} alignI={"center"}>
                    {filteredProjects.map((project, index) => (
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

