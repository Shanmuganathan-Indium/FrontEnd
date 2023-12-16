import React,{useContext} from 'react'
import { cContext } from './App2'
function CompA() {
  const countConext=useContext(cContext)
  return (
    <div>
        <h1>CompA {countConext.count}</h1>
        <button onClick={()=>countConext.dispatch("increment")}>increment</button>
        <button onClick={()=>countConext.dispatch("decrement")}>decrement</button>
        <button onClick={()=>countConext.dispatch("reset")}>reset</button>
    </div>
  )
}

export default CompA