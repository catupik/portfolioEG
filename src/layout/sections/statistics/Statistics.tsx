import {Statistic} from "./statistic/Statistic.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import {S} from './Statistics_Styles.ts'
export const Statistics = () => {
    return (
        <S.Statistics>
            <Container>
                <FlexWrapper wrap={"wrap"} justifyC={"space-around"} alignI={"center"}>
                    <Statistic number={"5+"} text={"completed pet projects"}/>
                    <Statistic number={"3+"} text={"3 open-source projects on GitHub"}/>
                    <Statistic number={"1"} text={"commercial project for a client"}/>
                </FlexWrapper>
            </Container>


        </S.Statistics>
    );
};

