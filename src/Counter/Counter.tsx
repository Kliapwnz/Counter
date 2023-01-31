import React from 'react';
import {Inc} from "./Inc/Inc";
import {Monitor} from "./Monitor/Monitor";
import {Reset} from "./Reset/Reset";

export const Counter = () => {
    return (
        <div>
            <Monitor/>
            <div>
                <Inc/>
                <Reset/>
            </div>
        </div>
    );
};

