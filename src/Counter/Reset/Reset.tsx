import React from 'react';
type PropsType={
    resetCount:()=>void
    count:number
}
export const Reset = (props:PropsType) => {
    return (
            <button disabled={props.count === 0} onClick={props.resetCount} className="button">reset</button>
    );
};

