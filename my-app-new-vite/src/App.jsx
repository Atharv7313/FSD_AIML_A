import { useState } from 'react'
import qbank from './qbank'
import './app.css'
function App() {
  return (
    <div className='quiz'>
    <h1>Quiz Application</h1>
     <br />
      Question {qbank.id}. {qbank.question} <br />
      <input type="radio" name="opt" id="" />{qbank.option1} <br /> 
      <input type="radio" name="opt" id="" />{qbank.option2} <br /> 
      <input type="radio" name="opt" id="" />{qbank.option3} <br /> 
      <input type="radio" name="opt" id="" />{qbank.option4} <br /> 
      <button>Prev</button>{}
      <button >Next</button>{}
    </div>
  )
}

export default App
