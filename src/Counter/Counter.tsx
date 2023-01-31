import React from 'react';
import {Inc} from "./Inc/Inc";
import {Monitor} from "./Monitor/Monitor";
import {Reset} from "./Reset/Reset";

type PropsType = {
    count: number
    addCount: () => void
    resetCount: () => void
    maxValue: number
}

export const Counter = (props: PropsType) => {
    return (
        <div className="counter">
            <Monitor
                count={props.count}
                maxValue={props.maxValue}
            />
            <div>
                <Inc
                    addCount={props.addCount}
                    count={props.count}
                    maxValue={props.maxValue}
                />
                <Reset
                    resetCount={props.resetCount}
                    count={props.count}
                />
            </div>
        </div>
    );
};

