import React from 'react';
type PropsType={
    resetCount:()=>void
    count:number
}
export const Reset = (props:PropsType) => {
    return (
        <div>
            <button disabled={props.count === 0} onClick={props.resetCount}>reset</button>
        </div>
    );
};

