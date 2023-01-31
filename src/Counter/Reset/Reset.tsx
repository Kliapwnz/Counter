import React from 'react';
type PropsType={
    resetCount:()=>void
}
export const Reset = (props:PropsType) => {
    return (
        <div>
            <button>reset</button>
        </div>
    );
};

