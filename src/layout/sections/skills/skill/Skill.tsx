import {Icon} from "../../../../components/icon/Icon.tsx";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme.tsx";

type SkillPropsType = {
    iconId: string
    iconWidth?: string
    iconHeight?: string
    iconViewBox?: string

}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId} width={props.iconWidth} height={props.iconHeight} viewBox={props.iconViewBox} />
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
 
    display: flex;
    justify-content: center;
    padding: 84px 0;
    color: ${theme.colors.iconGrey};
    background-color: #252525;
 
}

    @media ${theme.media.tablet} {
        padding: 50px 50px;
    }

    @media ${theme.media.mobile} {
        padding: 40px 30px;
    }
`
