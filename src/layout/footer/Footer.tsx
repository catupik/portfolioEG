import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Container} from "../../components/Container.tsx";
import {S} from './Footer_Styles.ts'

const socialLinksData = [
    { iconId: "gitS", viewBox: "-25 -15 50 50" },
    { iconId: "instagram", viewBox: "-25 -15 50 50" },
    { iconId: "mail", viewBox: "-25 -15 50 50" }
];


export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper justifyC="space-between" alignI="center">
                    <S.Copyright>© 2025 <span>E</span><span>G</span>. All rights reserved</S.Copyright>
                    <S.SocialList>
                        {socialLinksData.map((s, index) => (
                            <S.SocialItem key={index}>
                                <S.SocialLink>
                                    <Icon iconId={s.iconId} viewBox={s.viewBox} />
                                </S.SocialLink>
                            </S.SocialItem>
                        ))}
                    </S.SocialList>
                </FlexWrapper>
            </Container>

        </S.Footer>
    );
};

