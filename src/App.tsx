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
        setCount(count = 0)
    }

    return (
        <div className="App">
            <Counter
            count={count}
            addCount={addCount}
            resetCount={resetCount}
            />
        </div>
    );
}

export default App;
