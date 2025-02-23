import {Icon} from "../icon/Icon.tsx";
import {animateScroll as scroll} from 'react-scroll'

export const Logo: React.FC = () => {
    return (

        <a onClick={()=>{scroll.scrollToTop()}}>
            <Icon iconId={"logo"} height={"50"} width={"50"} viewBox={"0 0 50 50"}/>
        </a>
    );
};

