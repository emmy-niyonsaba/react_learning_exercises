


import React from 'react'

const EventHandling = () => {


    const handleClick = () => {
        alert("You have clicked the button")
    }
  return (
    <div>
      <h1>This section is to demonstrate event handling in React</h1>
      <button onClick={handleClick}>ClickMe No</button>
    </div>
  )
}

export default EventHandling
