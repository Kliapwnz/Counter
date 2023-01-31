import React from 'react';
type PropsType={
    addCount:()=>void
    count:number
    maxValue:number
}


export const Inc = (props:PropsType) => {
    return (
        <div>
            <button disabled={props.count === props.maxValue} onClick={props.addCount}>Inc</button>
        </div>
    );
};

