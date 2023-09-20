import React from 'react';

interface StatisticProps {
    label: string
    image: string
    value: string
}

function Statistic(props: StatisticProps) {

    return (
        <div className="stat">
            <div className={"top"}>
                <img src={require(`../../assets/${props.image}.png`)} alt={"img"}/>
                <h3>{props.label}</h3>
            </div>
            <h2>{props.value}</h2>
        </div>
    );
}

export default Statistic;
