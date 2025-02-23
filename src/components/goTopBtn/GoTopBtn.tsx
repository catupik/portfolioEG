import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {animateScroll as scroll} from 'react-scroll';
import {useEffect, useState} from "react";
import {theme} from "../../styles/Theme.tsx";

export const GoTopBtn = () => {

    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 200){
                setShowBtn(true);
            } else {
                setShowBtn(false);
            }
        })
    }, []);

    return (

        <>
            {showBtn &&(
                <StyledGoTopBtn onClick={()=>{scroll.scrollToTop()}}>
                    <Icon iconId={"arrowGoTop"} height={'100%'} width={'100%'} viewBox={"0 0 24 24"}/>
                </StyledGoTopBtn>
            )}

        </>
    );
};

const StyledGoTopBtn = styled.button`
    padding: 8px;
    position: fixed;
    right: 20px;
    bottom: 80px;
    color: white;
    background-color: rgba(0, 0, 0, 0.47);
    width: 50px;
    height: 50px;
    
    @media ${theme.media.mobile} {
        width: 30px;
        height: 30px; 
        padding: 0;
    }
`