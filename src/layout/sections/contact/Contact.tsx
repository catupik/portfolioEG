import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";
import {theme} from "../../../styles/Theme.tsx";
import {Container} from "../../../components/Container.tsx";


export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <SectionTitle textColor={theme.colors.fontLight} titleText={"Let’s work together"} underTextFirstLine={"If you are looking to hire a front-end developer"} underTextSecondaryLine={"I am currently available for collaboration"} underTextColor={theme.colors.iconGrey}
                    textA={"center"}/>

                <StyledForm>
                    <Field placeholder={"Name"}/>
                    <Field placeholder={"E-mail"}/>
                    <Field placeholder={"Phone"}/>
                    <Field placeholder={"Message"} as={"textarea"}/>
                    <Button margin={"15px 0 0"} type={"submit"} btnType={"outlined"} color={"#F5F5F5"} alignSelf={"center"}>Contact me</Button>
                </StyledForm>
            </Container>

        </StyledContact>
    );
};

const StyledContact = styled.section`
    
    background-color: ${theme.colors.primaryBg};
    display: flex;
`

const StyledForm = styled.form`
    max-width: 380px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
    align-items: center;
    
    textarea {
        resize: none;
        height: 140px;
    }
`
const Field = styled.input`
    width: 100%;
    border: 0.5px solid ${theme.colors.accent};
    height: 40px;
    background-color: ${theme.colors.primaryBg};
    padding: 7px 15px;
    font-weight: 400;
    font-size: 18px;
    letter-spacing: 0.01em;
    font-family: "Open Sans", sans-serif;
    color: white;
    
    &::placeholder {
        ${theme.colors.fontField}
    }
    
    &:focus-visible {
        outline: solid 1px ${theme.colors.accent};
    }
`