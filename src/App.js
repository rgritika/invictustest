import React, {useState} from 'react'
import Fetch from './fetch'

function App(){
  const [state, setState] = useState(0)
  const [num, setNum] = useState("")

  console.log(state)

  function handleChange(event){
    setNum(event.target.value)
  }

  function change(){
    setState(num)
  } 

  return(
    <div className="final">
      <h1 >Invictus Hiring Assessment</h1>
      <br />
      <br />
      <input className="input" onChange={handleChange} type="text" placeholder="Enter any Number"/>
      <br />
      <br />
      <br/>
      <button onClick={change} className="btn">Submit</button>
      <br />
      <br />
      <br />
      <Fetch number={state} />
    </div>
  )

}

export default App