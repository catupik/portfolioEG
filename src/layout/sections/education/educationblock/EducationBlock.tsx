import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {S} from './../Education_Styles.ts'

type EducationBlockPropsType = {
    year: string
    education: string;
    // lineWidth?: string;
    // lineLeft?: string;
}

// type YearPropsType = {
//     lineWidth?: string;
//     lineLeft?: string;
// }

export const EducationBlock: React.FC<EducationBlockPropsType> = (props: EducationBlockPropsType) => {
    return (
        <S.EducationBlock>
            <FlexWrapper direction="column">
                <S.Year >{props.year}</S.Year>
                <S.Text>{props.education}</S.Text>
            </FlexWrapper>
        </S.EducationBlock>
    );
};

