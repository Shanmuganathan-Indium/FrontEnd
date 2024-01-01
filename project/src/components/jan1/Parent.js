import React,{useState} from 'react'
import Child from './Child'

const Parent = () => {
    const [text, settext] = useState("")
    const handleparentFunction=(val)=>{
      settext(val)
    }
  return (
    <div>
      <h1 id='purple'>CHILD TO PARENT</h1>
        <h2>PARENT COMPONENT</h2>
        <h2 id='purple'>{text}</h2>
        <Child handleparentFunction={handleparentFunction}/>
    </div>
  )
}

export default Parent