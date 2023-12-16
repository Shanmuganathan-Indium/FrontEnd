import React from 'react'
import useCounter from './useCounter'

function CounterEx() {

    const [count,increment,decrement,reset] = useCounter(0,5);
  return (
    <div>
        <h1>Counter Example 1 = {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterEx