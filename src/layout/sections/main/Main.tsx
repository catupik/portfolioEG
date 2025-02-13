import styled from "styled-components";
import pic from '../../../assets/images/portfolioPic.webp'
import {Icon} from "../../../components/icon/Icon.tsx";
import {Button} from "../../../components/Button.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.tsx";
import {font} from "../../../styles/Common.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
            <FlexWrapper direction={'column'} justifyC={'center'} >
                <Hello>Hello, I’m</Hello>
                <Name>EKATERINA</Name>
                <MainTitle>Frontend Developer.</MainTitle>
                <SmallText>Based in Prague.</SmallText>
                <Button btnType={"outlined"} color={"white"}>Get in touch</Button>

                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={"gitS"} viewBox={"0 0 50 50"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={"instagram"} />
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={"mail"} />
                        </SocialLink>
                    </SocialItem>
                </SocialList>
            </FlexWrapper>
            </Container>


        </StyledMain>
    );
};

const StyledMain = styled.section`
    background-image: url(${pic});
    background-size: cover;
    min-height: 100vh;
    background-position: center;
    position: relative;
    color: white;
    display: flex;

  
`


const MainTitle =styled.h1`
    ${font({ weight: 400, lineHeight: '165%', Fmax: 18, Fmin: 14, color: `${theme.colors.secondaryBg}` })}
     letter-spacing: 0.01em;
     opacity: 0.9;
     margin-top: 20px;

    @media ${theme.media.mobile} {
        margin-top: 25px;
    }
`


const Name = styled.h2`
    ${font({family:'"Source Sans 3", sans-serif', weight: 700, lineHeight: '113%', Fmax: 70, Fmin: 36, color: `${theme.colors.accent}` })}
    letter-spacing: 0.02em;
    margin-top: 20px;
    
`
const Hello = styled(Name)`
    
    color: ${theme.colors.secondaryBg};
`

const SmallText = styled.span`
    ${font({ weight: 400, lineHeight: '165%', Fmax: 18, Fmin: 14, color: `${theme.colors.secondaryBg}` })}
    letter-spacing: 0.01em;
    opacity: 0.9;
    margin-bottom: 45px;
    
    @media ${theme.media.mobile} {
        margin-bottom: 25px;
    }
`

const SocialList = styled.ul`
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 50px;
`
const SocialItem = styled.li`
`
const SocialLink = styled.a`
color: ${theme.colors.iconGrey};
    cursor: pointer;

    &:hover {
        color: ${theme.colors.accent};
        transition-duration: 1s;
        transform: translateY(-4px);
        display: inline-block;
    }
`