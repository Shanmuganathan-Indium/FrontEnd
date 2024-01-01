import React from 'react'

const Child = ({ handleparentFunction }) => {
    const [first, setfirst] = React.useState("")

    const handleClick = () => {
        handleparentFunction(first)
    }

    const handleChange=(e)=>{
     console.log(e.target.value)
     setfirst(e.target.value)
    }
    return (
        <div>
            <h2>CHILD COMPONENT</h2>
            <input type='text' name="data" value={first || ""} onChange={handleChange}/>
            <button onClick={handleClick}>send data</button>
        </div>
    )
}

export default Child