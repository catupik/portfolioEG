import styled from "styled-components";

import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import img from "../../../assets/images/p1.webp"
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.tsx";
import {Button} from "../../../components/Button.tsx";
import {font} from "../../../styles/Common.tsx";

export const About = () => {

    return (
        <StyledAbout>
            <Container>
                <FlexWrapper alignI={"center"} justifyC={"space-around"} gapI={"20px"} wrap={"wrap"} >
                    <TextWrapper>
                        <SectionTitle titleText={"About Me"} textA={"start"}/>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapib eu placerat at nisl posuere aliquet amet pharetra malesuada. Spendisse nisl ac at tortor. Sit faucibus suspendisse risus vulputate pulvinar cursus suspendisse risus vulputate  enim pharetra eu. </Text>
                        <Text>Sit faucibus suspendisse risus vulputate pulvinar cursus enim hareta  eu. Sagittis enim morb. Suspendisse risus.</Text>
                        <FlexWrapper gapI={"22px"}>
                            <Button btnType={"primary"}>hire me</Button>
                            <Button btnType={"outlined"} color={theme.colors.fontDark}> download cv</Button>
                        </FlexWrapper>
                    </TextWrapper>

                    <PhotoWrapper>
                        <Photo src={img} alt={"pic"}/>
                    </PhotoWrapper>

                </FlexWrapper>
            </Container>

        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    background-color: white;
    display: flex;

    
`
const TextWrapper = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;

    @media ${theme.media.tablet} {

        width: 100%;
        ${FlexWrapper} {
            flex-direction: row;
        }
    }
    
    
    
`
const Text = styled.p`
    ${font({ weight: 400, lineHeight: '185%', Fmax: 20, Fmin: 16, color: `${theme.colors.fontGrey}` })}
  
    margin: 5px 0 20px;
    width: 100%;

   
`
const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    
`

const Photo = styled.img`
    height: 400px;
    width: 400px;
    object-fit: cover;
    
    @media ${theme.media.tablet} {
       
        height: 100%;
        width: 100%;
    }
  
`

