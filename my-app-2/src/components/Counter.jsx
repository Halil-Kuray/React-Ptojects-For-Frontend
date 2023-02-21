import React, {useState} from "react";

export default function Counter() {
    const [counter, setCounter] = useState(1)

    function increase() {
        setCounter(counter + 1)
    }

    function decrease() {
        setCounter(counter - 1)
    }


    return (
        <div className="counter">
            <button onClick={decrease}>–</button>
            <div>
                <h1>{counter}</h1>
            </div>
            <button onClick={increase}>+</button>
        </div>
    )
}