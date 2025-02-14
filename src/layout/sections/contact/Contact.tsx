import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";
import {theme} from "../../../styles/Theme.tsx";
import {Container} from "../../../components/Container.tsx";
import {S} from './Contact_Styles.ts'


export const Contact: React.FC = () => {
    return (
        <S.Contact>
            <Container>
                <SectionTitle textColor={theme.colors.fontLight} titleText={"Let’s work together"} underTextFirstLine={"If you are looking to hire a front-end developer"} underTextSecondaryLine={"I am currently available for collaboration"} underTextColor={theme.colors.iconGrey}
                    textA={"center"}/>

                <S.Form>
                    <S.Field placeholder={"Name"}/>
                    <S.Field placeholder={"E-mail"}/>
                    <S.Field placeholder={"Phone"}/>
                    <S.Field placeholder={"Message"} as={"textarea"}/>
                    <Button margin={"15px 0 0"} type={"submit"} btnType={"outlined"} color={"#F5F5F5"} alignSelf={"center"}>Contact me</Button>
                </S.Form>
            </Container>

        </S.Contact>
    );
};

