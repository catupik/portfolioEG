import styled from "styled-components";
import {theme} from "../../../../styles/Theme.tsx";
import {font} from "../../../../styles/Common.tsx";


type StatisticPropsType = {
    number: string
    text: string
}

export const Statistic = (props: StatisticPropsType) => {
    return (
        <StyledStatistic>

                <Number>{props.number}</Number>
                <Text>{props.text}</Text>

        </StyledStatistic>
    );
};

const StyledStatistic = styled.div`
    
`
const Number = styled.h2`
    ${font({family: '"Source Sans 3", sans-serif', weight: 900, Fmax: 105, Fmin: 50, color: `${theme.colors.statisticGrey}` })};
`
const Text = styled.p`
    ${font({ weight: 400, Fmax: 18, Fmin: 16, color: `${theme.colors.statisticDescription}` })};
    letter-spacing: 0.01em;;

`
