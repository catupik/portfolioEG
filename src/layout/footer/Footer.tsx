import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {theme} from "../../styles/Theme.tsx";
import {Container} from "../../components/Container.tsx";


export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justifyC="space-between" alignI="center">
                    <Copyright>© 2025 <span>E</span><span>G</span>. All rights reserved</Copyright>
                    <SocialList>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={"gitS"} viewBox={"-25 -15 50 50"} />
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={"instagram"} viewBox={"-25 -15 50 50"} />
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={"mail"} viewBox={"-25 -15 50 50"} />
                            </SocialLink>
                        </SocialItem>
                    </SocialList>
                </FlexWrapper>
            </Container>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg};
    display: flex;
    padding: 20px 0;
    
`

const SocialList = styled.ul`
   display: flex;
    
`
const SocialItem = styled.li`
   display: flex;
    justify-content: center;
    align-items: center;
`
const SocialLink = styled.a`
   color: ${theme.colors.iconGrey};
    cursor: pointer;
    
    &:hover {
        color: ${theme.colors.accent};
        transition-duration: 1s;
        transform: translateY(-4px);
    }
    
   `

const Copyright = styled.small`
    white-space: nowrap;
    color: ${theme.colors.iconGrey};
        span:first-child{
            color: ${theme.colors.accent};
        }
        span:last-child{
            color: white;
        }
`