
import {Skill} from "./skill/Skill.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {theme} from "../../../styles/Theme.tsx";
import {Container} from "../../../components/Container.tsx";
import {S} from './Skills_Styles.ts'

const skillData = [
    { iconId: "html", iconWidth: "78", iconHeight: "78", iconViewBox: "0 0 78 78" },
    { iconId: "css", iconWidth: "78", iconHeight: "78", iconViewBox: "0 0 78 78" },
    { iconId: "js", iconWidth: "78", iconHeight: "78", iconViewBox: "0 0 78 78" },
    { iconId: "react", iconWidth: "78", iconHeight: "78", iconViewBox: "0 0 78 78" },
    { iconId: "typescript", iconWidth: "78", iconHeight: "78", iconViewBox: "0 0 78 78" },
    { iconId: "redux", iconWidth: "78", iconHeight: "78", iconViewBox: "0 0 78 78" },
    { iconId: "styledComponents", iconWidth: "78", iconHeight: "78", iconViewBox: "0 0 78 78" },
    { iconId: "mongodb", iconWidth: "78", iconHeight: "78", iconViewBox: "0 0 78 78" },
    { iconId: "gitL", iconWidth: "78", iconHeight: "78", iconViewBox: "0 0 78 78" },
    { iconId: "express", iconWidth: "78", iconHeight: "78", iconViewBox: "0 0 78 78" },
    { iconId: "figma", iconWidth: "78", iconHeight: "78", iconViewBox: "0 0 78 78" },
    { iconId: "sass", iconWidth: "78", iconHeight: "78", iconViewBox: "0 0 78 78" }
];


export const Skills = () => {
    return (
        <S.Skills id="skills">
            <Container>
            <SectionTitle paddingTop={"120px"} textColor={theme.colors.fontLight} titleText={"Skills"} textA={"center"} underTextFirstLine={"Technologies I’ve been working with recently"}
            underTextColor={theme.colors.iconGrey}/>


                <S.SkillWrapper>
                    {skillData.map((s,index)=>{
                        return <Skill key={index} iconId={s.iconId} iconWidth={s.iconWidth} iconHeight={s.iconHeight} iconViewBox={s.iconViewBox} />
                        })}
                </S.SkillWrapper>
            </Container>

        </S.Skills>
    );
};

