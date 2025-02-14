
import {Icon} from "../../../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {S} from './../Projects_Styles.ts'

type ProjectPropsType = {
    projectImage: string;
    technology: string;
    projectName: string;
}

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
    return (
        <S.Project>
            <S.ImageWrapper>
                <S.Image src={props.projectImage} alt="projectImage" />
                <S.Description>
                    <S.Technology>{props.technology}</S.Technology>
                    <FlexWrapper alignI="center" gapI={"20px"}>
                        <S.ProjectName>{props.projectName}</S.ProjectName>
                        <S.Btn><Icon iconId={"arrow"} viewBox={"0 0 78 78"}/></S.Btn>
                    </FlexWrapper>

                </S.Description>
            </S.ImageWrapper>



        </S.Project>
    );
};
