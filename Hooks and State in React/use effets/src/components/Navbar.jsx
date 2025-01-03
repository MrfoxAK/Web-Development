import React, {useEffect} from 'react'

const Navbar = ({ color }) => {
  useEffect(() => {
    alert("Color was changed")
  }, [color])

  return (
    <div>
      I am Nav bar of {color} hehehe...
    </div>
  )
}

export default Navbar
