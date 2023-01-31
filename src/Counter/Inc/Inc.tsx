import React from 'react';
type PropsType={
    addCount:()=>void
}
export const Inc = (props:PropsType) => {
    return (
        <div>
            <button onClick={props.addCount}>Inc</button>
        </div>
    );
};

