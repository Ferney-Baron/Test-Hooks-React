import { useCounter } from "../hooks/useCounter"

export const CounterWithUseCounter = () => {

    const { counter, increment, reset, decrement } = useCounter( 1 ); 

  return (
    <>
        <h1>useCounter</h1>

        <h2>Counter with Hook: { counter }</h2>

        <button className="btn btn-primary" onClick={ () => increment(2) }>+1</button>
        <button className="btn btn-primary" onClick={ reset }>Reset</button>
        <button className="btn btn-primary" onClick={ () => decrement(3) }>-1</button>
    </>
  )
}
