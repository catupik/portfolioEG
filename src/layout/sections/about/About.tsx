import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import img from "../../../assets/images/p1.webp"
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.tsx";
import {Button} from "../../../components/Button.tsx";
import {S} from './About_Styles.ts'


export const About: React.FC = () => {

    return (
        <S.About>
            <Container>
                <FlexWrapper alignI={"center"} justifyC={"space-around"} gapI={"20px"} wrap={"wrap"} >
                    <S.TextWrapper>
                        <SectionTitle titleText={"About Me"} textA={"start"}/>
                        <S.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapib eu placerat at nisl posuere aliquet amet pharetra malesuada. Spendisse nisl ac at tortor. Sit faucibus suspendisse risus vulputate pulvinar cursus suspendisse risus vulputate  enim pharetra eu. </S.Text>
                        <S.Text>Sit faucibus suspendisse risus vulputate pulvinar cursus enim hareta  eu. Sagittis enim morb. Suspendisse risus.</S.Text>
                        <FlexWrapper gapI={"22px"}>
                            <Button btnType={"primary"}>hire me</Button>
                            <Button btnType={"outlined"} color={theme.colors.fontDark}> download cv</Button>
                        </FlexWrapper>
                    </S.TextWrapper>

                    <S.PhotoWrapper>
                        <S.Photo src={img} alt={"pic"}/>
                    </S.PhotoWrapper>

                </FlexWrapper>
            </Container>

        </S.About>
    );
};


