import { useState } from "react"

export const CounterApp = () => {

    const [{ counter1, counter2, counter3 }, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    });

  return (
    <>
        <h1>CounterApp</h1>

        <h2>Counter1: { counter1 }</h2>
        <h2>Counter2: { counter2 }</h2>
        <h2>Counter3: { counter3 }</h2>

        <hr />

        <button 
            className="btn btn-primary" 
            onClick={ () => setCounter(prev => ({
                ...prev,
                counter1: prev.counter1 + 1,
            }))}
        >
            +1
        </button>
    </>
  )
}

