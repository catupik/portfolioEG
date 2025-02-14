import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";

const Contact = styled.section`
    
    background-color: ${theme.colors.primaryBg};
    display: flex;
`

const Form = styled.form`
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
export const S = {
    Contact,
    Form,
    Field,
}