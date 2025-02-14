
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {EducationBlock} from "./educationblock/EducationBlock.tsx";
import {Container} from "../../../components/Container.tsx";
import {S} from './Education_Styles.ts'

const educationData = [
    { year: "2022", education: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua." },
    { year: "2023", education: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua." },
    { year: "2024", education: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua." },
    { year: "2025", education: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua." }
];


export const Education: React.FC = () => {
    return (
        <S.Education>
            <Container>
                <FlexWrapper direction="column" justifyC="space-around">
                    <SectionTitle paddingTop={"120px"}
                        titleText={"Education"}
                                  underTextFirstLine={"Continuously learning and evolving in front-end"}
                                  underTextSecondaryLine={"development since 2022"}

                    />

                <FlexWrapper justifyC={"center"} alignI={"center"} gapI={"34px"}>
                    {educationData.map((e, index) => (
                        <EducationBlock key={index} year={e.year} education={e.education}/>
                    ))}
                    
                </FlexWrapper>
                </FlexWrapper>
            </Container>


        </S.Education>
    );
};

