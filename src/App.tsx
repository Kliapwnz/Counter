import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from "./Counter/Counter";


function App() {
    let [count, setCount] = useState(0)
    let addCount = () => {
        setCount(count + 1);
    }
    let resetCount = () => {
        setCount(0)
    }
    const maxValue = 5

    return (
        <div className="App">
            <Counter
            count={count}
            addCount={addCount}
            resetCount={resetCount}
            maxValue={maxValue}
            />
        </div>
    );
}

export default App;
