import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className=' bg-gray-800 text-white p-4 flex items-center justify-between'>
      <div>
        <img src="https://via.placeholder.com/150" alt="Logo" />
        <h1>My Website</h1>
      </div>
        <ul className=' flex space-x-4 '>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/simple-form">Simple Form</Link></li>
            <li><Link to="/event-handling">Event Handling</Link></li>
            <li><Link to="/get-data">Get Data</Link></li>
        </ul>

    </div>
  )
}

export default Navbar
