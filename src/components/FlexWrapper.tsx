import styled from "styled-components";


type FlexWrapperPropsType = {
    direction?: string
    justifyC?: string
    alignI?: string
    wrap?: string
    alignC?: string
    gapI?: string
    heightC?: boolean

}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justifyC || 'flex-start'};
    align-items: ${props => props.alignI || 'stretch'};
    flex-wrap: ${ props => props.wrap || 'nowrap'};
    align-content: ${props => props.alignC || 'stretch'};
    gap: ${ props => props.gapI || '0px'};
    height: ${ props => props.heightC && 'fit-content' || '100%'};
     
    
    
`