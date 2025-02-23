import {S} from './TabMenu_Styles.ts'

export type TabsStatusType = "all" | "react" | "js";

type TabMenuPropsType = {
    tabsItems: Array<{status: TabsStatusType ,title: string}>,
    changeFilterStatus: (value:TabsStatusType  )=>void,
    currentFilterStatus: string,
}

export const TabMenu  = (props: TabMenuPropsType)  => {
    return (
        <S.TabMenu>
            <ul>
                {props.tabsItems.map((item, index)=>{
                    return <S.ListItem key={index}>
                        <S.Link active={props.currentFilterStatus===item.status} as={"button"} onClick={()=>{props.changeFilterStatus(item.status)}}>{item.title}</S.Link>
                    </S.ListItem>
                })}

            </ul>
        </S.TabMenu>
    );
};

