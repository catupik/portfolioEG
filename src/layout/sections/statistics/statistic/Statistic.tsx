import {S} from './../Statistics_Styles.ts'


type StatisticPropsType = {
    number: string
    text: string
}

export const Statistic: React.FC<StatisticPropsType> = (props: StatisticPropsType) => {
    return (
        <S.Statistic>

                <S.Number>{props.number}</S.Number>
                <S.Text>{props.text}</S.Text>

        </S.Statistic>
    );
};

