import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setName] = useState("Akash")
  const [form, setform] = useState({ email: "", phone: "" })

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleClick = () => {
    alert("Hy I am Clicked")
  }

  const handleMouseOver = () => {
    alert("Hovered on red div")
  }

  const handleChange = (event) => {
    setform({ ...form, [event.target.name]: event.target.value })
    console.log(form)
  }

  return (
    <>

      <div className='button'>
        <button onClick={handleClick}>Click Me</button>
      </div>
      {/* <div className="red" onMouseOver={handleMouseOver}>
        I am a red div
      </div> */}

      <input type="text" name="email" value={form.email ? form.email : ""} onChange={handleChange} />
      <input type="text" name="phone" value={form.phone ? form.phone : ""} onChange={handleChange} />

    </>
  )
}

export default App
