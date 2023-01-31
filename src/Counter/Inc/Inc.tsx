import React from 'react';
type PropsType={
    addCount:()=>void
    count:number
}
export const Inc = (props:PropsType) => {
    return (
        <div>
            <button disabled={props.count === 5} onClick={props.addCount}>Inc</button>
        </div>
    );
};

