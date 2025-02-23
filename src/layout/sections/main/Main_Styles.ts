import {theme} from "../../../styles/Theme.tsx";
import styled from "styled-components";
import {font} from "../../../styles/Common.tsx";
import pic from '../../../assets/images/portfolioPic.webp'

const Main = styled.section`
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
    transition:  ${theme.animations.transition};

    &:hover {
        color: ${theme.colors.accent};
        transform: translateY(-4px);
        display: inline-block;
    }
`

export const S ={
    Main,
    MainTitle,
    Name,
    Hello,
    SmallText,
    SocialItem,
    SocialList,
    SocialLink,
}