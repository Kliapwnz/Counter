import React from 'react';
type PropsType={
    addCount:()=>void
    count:number
}
const maxValue = 5

export const Inc = (props:PropsType) => {
    return (
        <div>
            <button disabled={props.count === maxValue} onClick={props.addCount}>Inc</button>
        </div>
    );
};

