import {Icon} from "../../../../components/icon/Icon.tsx";
import {S} from './../Skills_Styles.ts'

type SkillPropsType = {
    iconId: string
    iconWidth?: string
    iconHeight?: string
    iconViewBox?: string

}

export const Skill = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <Icon iconId={props.iconId} width={props.iconWidth} height={props.iconHeight} viewBox={props.iconViewBox} />
        </S.Skill>
    );
};

