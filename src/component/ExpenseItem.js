import React, {useState} from "react"



function ExpenseItem(props) {
const [counter, setCounter] = useState(0)

const changeHandler=()=>{
  setCounter(counter + 1 )
}

  return (
    <div>
    <h1>{counter}</h1>
    <button onClick={changeHandler}>Increment</button>
    </div>
  )
}

export default ExpenseItem;
