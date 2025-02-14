import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {font} from "../../../styles/Common.tsx";

const Statistics = styled.section`
    background-color: ${theme.colors.secondaryBg};
    
    @media ${theme.media.tablet} {
        ${FlexWrapper}{
            flex-direction: column;
            align-items: flex-start;
            align-content: center;
        }
    }
   
`
//statistic

const Statistic = styled.div`
    
`
const Number = styled.h2`
    ${font({family: '"Source Sans 3", sans-serif', weight: 900, Fmax: 105, Fmin: 50, color: `${theme.colors.statisticGrey}` })};
`
const Text = styled.p`
    ${font({ weight: 400, Fmax: 18, Fmin: 16, color: `${theme.colors.statisticDescription}` })};
    letter-spacing: 0.01em;;

`

export const S ={
    Statistics,
    Number,
    Text,
    Statistic,
}