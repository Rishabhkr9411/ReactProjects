import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
let [counter,setcounter]=useState(10) // hooks

const addValue=()=>{
  if(counter<20)
  {
   // console.log(counter)
    setcounter(counter+1)
 } 
}

const removeValue=()=>{
  if(counter>0)
  {
   setcounter(counter-1)
  }   
}

  return (
    <>
    <h1>Chai aur code</h1>
    <h2>counter value: {counter}</h2>

    
    <button onClick={addValue}>Add value </button>
    <br />
    <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
