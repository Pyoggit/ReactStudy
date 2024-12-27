import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [light, setLight] = useState('OFF');

  const buttonClickEvent = (e)=>{
    setCount(count + 1)
    console.log(count)
  }

  

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick ={buttonClickEvent}>+</button>
      </div>
      <div>
        <h1>{light}</h1>
        <button onClick = {()=>{ setLight(light === 'OFF' ? 'ON' : 'OFF' ) }}>
          {light === 'ON' ? ("끄기"):("켜기")}
        </button>
      </div>
    </>
  )
}

export default App
