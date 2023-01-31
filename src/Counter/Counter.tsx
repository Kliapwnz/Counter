import React from 'react';
import {Inc} from "./Inc/Inc";
import {Monitor} from "./Monitor/Monitor";
import {Reset} from "./Reset/Reset";

type PropsType = {
    count: number
    addCount: () => void
    resetCount: () => void
}


export const Counter = (props: PropsType) => {
    return (
        <div>
            <Monitor count={props.count}/>
            <div>
                <Inc addCount={props.addCount}/>
                <Reset resetCount={props.resetCount}/>
            </div>
        </div>
    );
};

