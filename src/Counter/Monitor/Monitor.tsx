import React from 'react';

type PropsType = {
    count: number
    maxValue:number
}
export const Monitor = (props: PropsType) => {
    return (
        <div>
            <div className="monitor"><span className={props.count === props.maxValue ? "error" : ""}>{props.count}</span></div>
        </div>
    );
};

