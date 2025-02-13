import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";
import {font} from "../styles/Common.tsx";

type StyledTitlePropsType = {
    titleText: string;
    underTextFirstLine?: string;
    underTextSecondaryLine?: string;
    underTextColor?: string;
    textA?: string;
    textColor?: string;
    paddingTop?: string;
};

type SectionTitlePropsType = {
    textA?: string;
    textColor?: string;
};

type UnderTextPropsType = {
    underTextColor?: string;
};

export const SectionTitle = (props: StyledTitlePropsType) => {
    return (
        <WholeTitle>
            <StyledTitle textColor={props.textColor} textA={props.textA}>{props.titleText}</StyledTitle>
            {props.underTextFirstLine && <UnderText underTextColor={props.underTextColor}>{props.underTextFirstLine}</UnderText>}
            {props.underTextSecondaryLine && <UnderText underTextColor={props.underTextColor}>{props.underTextSecondaryLine}</UnderText>}

        </WholeTitle>
    );
};

const WholeTitle = styled.div`
    margin-bottom: 5px;
    
    @media ${theme.media.tablet} {
        margin-bottom: 10px;
    }
`

const StyledTitle = styled.h2<SectionTitlePropsType>`
    ${(props)=>font({family:'"Source Sans 3", sans-serif', weight: 600, lineHeight: '185%', Fmax: 60, Fmin: 30, color: `${props.textColor || theme.colors.fontDark}` })}
    
  
    text-align: ${(props) => props.textA || "center"};
    //margin-bottom: -10px;
    
    @media ${theme.media.tablet} {
        white-space: nowrap;
        
    }
`;

const UnderText = styled.p<UnderTextPropsType>`
    
    ${props => font({family:'"Source Sans 3", sans-serif', weight: 400, lineHeight: '185%', Fmax: 18, Fmin: 12, color: `${props.underTextColor || theme.colors.fontGrey}` })}
    text-align: center;
    letter-spacing: 0.01em;

    @media ${theme.media.tablet} {
        white-space: nowrap;

    }
    
`