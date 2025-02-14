import {Icon} from "../../../components/icon/Icon.tsx";
import {Button} from "../../../components/Button.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import React from "react";
import {S} from './Main_Styles.ts'

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
            <FlexWrapper direction={'column'} justifyC={'center'} >
                <S.Hello>Hello, I’m</S.Hello>
                <S.Name>EKATERINA</S.Name>
                <S.MainTitle>Frontend Developer.</S.MainTitle>
                <S.SmallText>Based in Prague.</S.SmallText>
                <Button btnType={"outlined"} color={"white"}>Get in touch</Button>

                <S.SocialList>
                    <S.SocialItem>
                        <S.SocialLink>
                            <Icon iconId={"gitS"} viewBox={"0 0 50 50"}/>
                        </S.SocialLink>
                    </S.SocialItem>
                    <S.SocialItem>
                        <S.SocialLink>
                            <Icon iconId={"instagram"} />
                        </S.SocialLink>
                    </S.SocialItem>
                    <S.SocialItem>
                        <S.SocialLink>
                            <Icon iconId={"mail"} />
                        </S.SocialLink>
                    </S.SocialItem>
                </S.SocialList>
            </FlexWrapper>
            </Container>


        </S.Main>
    );
};
