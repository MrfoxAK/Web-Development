import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let counter = 5

  const addValue = () => {
    counter = counter + 1
    console.log('Counter value increased by 1', counter)
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h1>Counter Value: {counter}</h1>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button>Remove Value {counter}</button>
    </>
  )
}

export default App
