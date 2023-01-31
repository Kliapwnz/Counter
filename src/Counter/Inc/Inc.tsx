import React from 'react';
type PropsType={
    addCount:()=>void
}
export const Inc = (props:PropsType) => {
    return (
        <div>
            <button>Inc</button>
        </div>
    );
};

