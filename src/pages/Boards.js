import React from 'react'

import { Link } from "react-router-dom"
function Boards() {
  return (
    <div style={{border: "1px solid black", width: "180px", height: "40px", display:"flex", alignItems:"center", justifyContent:"center"}}>
    <Link to="/boards/JS">Go to the tasks</Link>
  </div>
  )
}

export default Boards