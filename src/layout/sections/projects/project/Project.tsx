import styled from "styled-components";
import {theme} from "../../../../styles/Theme.tsx";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {font} from "../../../../styles/Common.tsx";

type ProjectPropsType = {
    projectImage: string;
    technology: string;
    projectName: string;
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <ImageWrapper>
                <Image src={props.projectImage} alt="projectImage" />
                <Description>
                    <Technology>{props.technology}</Technology>
                    <FlexWrapper alignI="center" gapI={"20px"}>
                        <ProjectName>{props.projectName}</ProjectName>
                        <Btn><Icon iconId={"arrow"} viewBox={"0 0 78 78"}/></Btn>
                    </FlexWrapper>

                </Description>
            </ImageWrapper>



        </StyledProject>
    );
};

const StyledProject = styled.div`

    max-width: 410px;
    width: 350px;
    
    
`
const Description = styled.div`
    color: ${theme.colors.secondaryBg};
    
`
const ImageWrapper = styled.div`
    position: relative;

    ${Description}{
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 84%;
        transform: translate(-50%, -50%);
        transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
    }
    &::before{
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(21, 21, 21, 0.67);
        opacity: 0;
    }
    
    &:hover {
        &::before{
            
            opacity: 1;
        }

        ${Description}{
            opacity: 1;
        }
    }
    
    @media ${theme.media.tablet} {
        &::before{

            opacity: 1;
        }

        ${Description}{
            opacity: 1;
        }
        
    }
   
    
`
const Image = styled.img`
    width: 100%;
    object-fit: cover;
    
`

const Technology = styled.h4`
    ${font({family: '"Source Sans 3", sans-serif', weight: 400, Fmax: 14, Fmin: 14, color: `${theme.colors.secondaryBg}` })};
    text-transform: capitalize;
  `

const ProjectName = styled.h3`
    ${font({family: '"Source Sans 3", sans-serif', weight: 700, Fmax: 26, Fmin: 26, color: `${theme.colors.secondaryBg}` })}
    letter-spacing: 0.01em;
    text-transform: capitalize;
    flex: 4;
    min-width: 250px;
    width: 100%;
`

const Btn = styled.button`
    color: ${theme.colors.secondaryBg};
    cursor: pointer;
`