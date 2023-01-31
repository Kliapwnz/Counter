import React from 'react';
type PropsType={
    count:number
}
export const Monitor = (props:PropsType) => {
    return (
        <div>
            <div className="display">{props.count}</div>
        </div>
    );
};

