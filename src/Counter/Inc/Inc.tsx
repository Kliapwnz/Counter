import React from 'react';
type PropsType={
    addCount:()=>void
    count:number
    maxValue:number
}


export const Inc = (props:PropsType) => {
    return (
            <button disabled={props.count === props.maxValue} onClick={props.addCount} className="button">Inc</button>
    );
};

