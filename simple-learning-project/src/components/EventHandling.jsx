


import React, { use } from 'react'
import { useState } from 'react';

const EventHandling = () => {

    const [name, setName] =useState("Guest")



    const handerSetName=()=>{
        setName("Emmanuel");
    }
    const handleClick = () => {
        alert("You have clicked the button")
    }
  return (
    <div>
      <h1>This section is to demonstrate event handling in React</h1>
     
        <br />
        <br />
            <h2>Welcome again {name}</h2>
        
      <button onClick={handleClick}>ClickMe No</button>

      <button onClick={handerSetName}>Say Hi!</button>
    </div>
  )
}

export default EventHandling
